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
      }
    `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      // Create jobpages.
      result.data.allContentfulJobListing.edges.forEach((({ node }) => {
        const url = node.job_title.replace(/\W+/g, '-').toLowerCase();
        createPage({
          path: `/vacatures/${url}`, // required
          component: slash(jobTemplate),
          context: {
            id: node.id,
          },
        });
      }));
      
      result.data.allContentfulPartner.edges.forEach((({ node }) => {
        const url = node.name.replace(/\W+/g, '-').toLowerCase();
        createPage({
          path: `/partners/${url}`, //required
          component: slash(partnerTemplate),
          context: {
            id: node.id
          }
        })
      }));
    }));
  });
};

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators;

  const fetchActivities = () => axios.get('https://koala.svsticky.nl/api/activities')
  const res = await fetchActivities()
  res.data.map((activity, i) => {
      const activityNode = {
        id: `${i}`,
        parent: `__SOURCE__`,
        internal: {
          type: `Activity`
        },
        children: [],   
        name: activity.name,
        location: activity.location,
        start_date: activity.start_date,
        end_date: activity.end_date,
        poster: activity.poster,
        fullness: activity.fullness
      }

      const contentDigest = crypto.createHash(`md5`)
      .update(JSON.stringify(activityNode)).digest(`hex`);
      activityNode.internal.contentDigest = contentDigest;

      createNode(activityNode);
    });
}
