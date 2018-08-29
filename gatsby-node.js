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
              job_title
            }
          }
        }
        allContentfulPartner {
          edges {
            node {
              id
              name
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              id
              title
              contentfulparent {
                title
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
        const url = node.job_title.replace(/\W+/g, '-').toLowerCase();
        createPage({
          path: `/vacatures/${url}`,
          component: slash(jobTemplate),
          context: {
            id: node.id,
          },
        });
      }));

      // Create partnerpages
      result.data.allContentfulPartner.edges.forEach((({ node }) => {
        const url = node.name.replace(/\W+/g, '-').toLowerCase();
        createPage({
          path: `/partners/${url}`,
          component: slash(partnerTemplate),
          context: {
            id: node.id,
          },
        });
      }));

      // Create general pages
      result.data.allContentfulPage.edges.forEach((({ node }) => {
        let url;
        if (node.customSlug) {
          url = node.customSlug;
        } else if (node.contentfulparent) {
          url = node.contentfulparent.title.toLowerCase() + '/' + node.title.replace(/\W+/g, '-').toLowerCase();
        } else {
          url = node.title.replace(/\W+/g, '-').toLowerCase();
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
