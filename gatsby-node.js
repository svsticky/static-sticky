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
            summary
            contact_name
            contact_email
            phone_number
            featured
            target_studies
            type
            content {
              id
            }
            partner {
              id
              name
              website
              logo {
                title
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
    `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      // Create jobpages.
      result.data.allContentfulJobListing.edges.forEach((edge) => {
        const url = edge.node.job.job_title.replace(/-|\/|/g, '').replace(/\s\s/g, ' ').replace(/ /g, '-').toLowerCase(); // way too ugly, must be fixed with proper RegEx
        createPage({
          path: `/vacatures/${url}`, // required
          component: slash(jobTemplate),
        });
      });
    }));
  });
};
