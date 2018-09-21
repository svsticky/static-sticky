const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');
const axios = require('axios');
const crypto = require('crypto');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const jobTemplate = path.resolve('src/templates/JobTemplate.jsx');
    const partnerTemplate = path.resolve('src/templates/PartnerTemplate.jsx');
    const pageTemplate = path.resolve('src/templates/PageTemplate.jsx');
    resolve(graphql(`
      query JobQuery {
        allContentfulJobListing {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulPartner {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              id
              slug
              parentPage {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      // Create jobpages
      result.data.allContentfulJobListing.edges.forEach((({ node }) => {
        createPage({
          path: `/vacatures/${node.slug}`,
          component: slash(jobTemplate),
          context: {
            id: node.id,
          },
        });
      }));

      // Create partnerpages
      result.data.allContentfulPartner.edges.forEach((({ node }) => {
        createPage({
          path: `/partners/${node.slug}`,
          component: slash(partnerTemplate),
          context: {
            id: node.id,
          },
        });
      }));

      // Create general pages
      result.data.allContentfulPage.edges.forEach((({ node }) => {
        let url;
        if (node.parentPage) {
          url = node.parentPage.slug + '/' + node.slug;
        } else {
          url = node.slug;
        }
        createPage({
          path: `/${url}`,
          component: slash(pageTemplate),
          context: {
            id: node.id,
          },
        });
      }));
    }));
  });
};

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  await axios.get('https://koala.svsticky.nl/api/activities')
    .then((res) => {
      if (res.data.length > 0) {
        res.data.map((activity, i) => {
          const activityNode = {
            id: `${i}`,
            parent: '__SOURCE__',
            internal: {
              type: 'Activity',
            },
            children: [],
            name: activity.name,
            location: activity.location,
            start_date: activity.start_date,
            end_date: activity.end_date,
            poster: activity.poster,
            fullness: activity.fullness,
          };
          const contentDigest = crypto.createHash('md5')
            .update(JSON.stringify(activityNode)).digest('hex');
          activityNode.internal.contentDigest = contentDigest;
          return createNode(activityNode);
        });
      } else {
        createEmptyActivityNode(createNode);
      }
    })
    .catch(() => createEmptyActivityNode(createNode));
};

const createEmptyActivityNode = (createNode) => {
  const emptyNode = {
    id: `${-1}`,
    parent: '__SOURCE__',
    internal: {
      type: 'Activity',
    },
    children: [],
    name: 'error',
    location: '',
    start_date: '',
    end_date: '',
    poster: '',
    fullness: '',
  };
  const contentDigest = crypto.createHash('md5')
    .update(JSON.stringify(emptyNode)).digest('hex');
  emptyNode.internal.contentDigest = contentDigest;
  return createNode(emptyNode);
};
