const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const jobTemplate = path.resolve('src/templates/JobTemplate.jsx');
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
    }));
  });
};
