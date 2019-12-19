const path = require('path');
const slash = require('slash');
const fs = require('fs');

exports.createPages = async ({ graphql, actions }) => {
  let locale = 'nl';
  const { createPage } = actions;
  const jobTemplate = path.resolve('src/templates/JobTemplate.jsx');
  const partnerTemplate = path.resolve('src/templates/PartnerTemplate.jsx');
  const pageTemplate = path.resolve('src/templates/PageTemplate.jsx');
  const boardTemplate = path.resolve('src/templates/BoardTemplate.jsx');
  const newsTemplate = path.resolve('src/templates/NewsTemplate.jsx');
  const disputeTemplate = path.resolve(`src/templates/DisputeTemplate.jsx`);
  const committeeTemplate = path.resolve(`src/templates/CommitteeTemplate.jsx`);

  // filter: { node_locale: { eq: "en-US" } }

  const query = await graphql(`
    query PagesQuery {
      allContentfulJobListing(filter: { node_locale: { eq: ${locale} } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
      allContentfulPartner(filter: { node_locale: { eq: ${locale} } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
      allContentfulPage(filter: { node_locale: { eq: ${locale} } }) {
        edges {
          node {
            id
            title
            slug
            parentPage {
              slug
            }
          }
        }
      }
      allContentfulBoard(filter: { node_locale: { eq: ${locale} } }) {
        edges {
          node {
            id
            number
          }
        }
      }
      allContentfulNewsArticles(filter: { node_locale: { eq: ${locale} } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
      allContentfulDispute(filter: { node_locale: { eq: ${locale} } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
      allContentfulCommittee(filter: { node_locale: { eq: ${locale} } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  function createTemplatePage(url, templatePath, id) {
    createPage({
      path: url,
      component: slash(templatePath),
      context: {
        id: id,
      },
    });
  }

  if (query.errors) {
    throw new Error(JSON.stringify(query.errors));
  } else {
    // Create jobpages
    query.data.allContentfulJobListing.edges.forEach(({ node }) => {
      createTemplatePage(`/vacatures/${node.slug}`, jobTemplate, node.id);
    });

    // Create partnerpages
    query.data.allContentfulPartner.edges.forEach(({ node }) => {
      createTemplatePage(`/partners/${node.slug}`, partnerTemplate, node.id);
    });

    // Create boardpages
    query.data.allContentfulBoard.edges.forEach(({ node }) => {
      createTemplatePage(`besturen/${node.number}`, boardTemplate, node.id);
    });

    query.data.allContentfulNewsArticles.edges.forEach(({ node }) => {
      createTemplatePage(`/news/${node.slug}`, newsTemplate, node.id);
    });

    // Create general pages
    query.data.allContentfulPage.edges.forEach(({ node }) => {
      let url;
      if (node.parentPage) {
        url = node.parentPage.slug + '/' + node.slug;
      } else {
        url = node.slug;
      }

      const localPath = path.resolve('src', 'pages', url + '.jsx');
      // Check asynchronously if we have a the page locally.
      fs.access(localPath, fs.R_OK, err => {
        if (err) createTemplatePage(`/${url}`, pageTemplate, node.id);
      });
    });

    query.data.allContentfulDispute.edges.forEach(({ node }) => {
      createTemplatePage(`/disputen/${node.slug}`, disputeTemplate, node.id);
    });

    query.data.allContentfulCommittee.edges.forEach(({ node }) => {
      createTemplatePage(
        `/commissies/${node.slug}`,
        committeeTemplate,
        node.id
      );
    });
  }
};
