const path = require('path');
const slash = require('slash');
const fs = require('fs');
const metadata = require('./gatsby-config.js').siteMetadata;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const indexTemplate = path.resolve('src/pages/index.jsx');
  const jobTemplate = path.resolve('src/templates/JobTemplate.jsx');
  const partnerTemplate = path.resolve('src/templates/PartnerTemplate.jsx');
  const pageTemplate = path.resolve('src/templates/PageTemplate.jsx');
  const boardTemplate = path.resolve('src/templates/BoardTemplate.jsx');
  const newsTemplate = path.resolve('src/templates/NewsTemplate.jsx');
  const disputeTemplate = path.resolve(`src/templates/DisputeTemplate.jsx`);
  const committeeTemplate = path.resolve(`src/templates/CommitteeTemplate.jsx`);
  const staticFolder = `src/static-pages`;
  const query = await graphql(`
    query PagesQuery {
      allContentfulJobListing {
        edges {
          node {
            id
            node_locale
            slug
          }
        }
      }
      allContentfulPartner {
        edges {
          node {
            id
            node_locale
            slug
          }
        }
      }
      allContentfulPage {
        edges {
          node {
            id
            node_locale
            title
            slug
            parentPage {
              slug
            }
          }
        }
      }
      allContentfulBoard {
        edges {
          node {
            id
            node_locale
            number
          }
        }
      }
      allContentfulNewsArticles {
        edges {
          node {
            id
            node_locale
            slug
          }
        }
      }
      allContentfulDispute {
        edges {
          node {
            id
            node_locale
            slug
          }
        }
      }
      allContentfulCommittee {
        edges {
          node {
            id
            node_locale
            slug
          }
        }
      }
    }
  `);

  function createTemplatePage(lg, url, templatePath, id) {
    // Create page without language for default language
    if (lg === metadata.defaultLocale) {
      createPage({
        path: url,
        component: slash(templatePath),
        context: {
          id: id,
        },
      });
    }

    console.log(`${lg}${url}`);

    createPage({
      path: `${lg}${url}`,
      component: slash(templatePath),
      context: {
        id: id,
      },
    });
  }

  function createStaticPages(folder, location) {
    fs.readdirSync(folder).forEach(file => {
      if (fs.statSync(`${folder}/${file}`).isDirectory())
        return createStaticPages(`${folder}/${file}`, file);

      let baseUrl = `${location}/${file}`.split('.')[0]; // Get the path before file extension
      if (baseUrl === '/index') baseUrl = '';
      else if (baseUrl === '/404') return;

      // Create a page for each language
      metadata.languages.forEach(lang => {
        createTemplatePage(
          lang,
          `/${baseUrl}`,
          path.resolve(`${folder}/${file}`),
          null
        );
      });
    });
  }

  if (query.errors) {
    throw new Error(JSON.stringify(query.errors));
  } else {
    // Create all static pages
    createStaticPages(staticFolder, '');

    // Create jobpages
    query.data.allContentfulJobListing.edges.forEach(({ node }) => {
      createTemplatePage(
        node.node_locale,
        `/vacatures/${node.slug}`,
        jobTemplate,
        node.id
      );
    });

    // Create partnerpages
    query.data.allContentfulPartner.edges.forEach(({ node }) => {
      createTemplatePage(
        node.node_locale,
        `/partners/${node.slug}`,
        partnerTemplate,
        node.id
      );
    });

    // Create boardpages
    query.data.allContentfulBoard.edges.forEach(({ node }) => {
      createTemplatePage(
        node.node_locale,
        `/besturen/${node.number}`,
        boardTemplate,
        node.id
      );
    });

    query.data.allContentfulNewsArticles.edges.forEach(({ node }) => {
      createTemplatePage(
        node.node_locale,
        `/news/${node.slug}`,
        newsTemplate,
        node.id
      );
    });

    // Create general pages
    query.data.allContentfulPage.edges.forEach(({ node }) => {
      let url;
      if (node.parentPage) {
        url = node.parentPage.slug + '/' + node.slug;
      } else {
        url = node.slug;
      }

      const localPath = path.resolve('src', 'static-pages', url + '.jsx');
      // Check asynchronously if we have a the page locally.
      fs.access(localPath, fs.R_OK, err => {
        if (err) {
          createTemplatePage(
            node.node_locale,
            `/${url}`,
            pageTemplate,
            node.id
          );
        }
      });
    });

    query.data.allContentfulDispute.edges.forEach(({ node }) => {
      createTemplatePage(
        node.node_locale,
        `/disputen/${node.slug}`,
        disputeTemplate,
        node.id
      );
    });

    query.data.allContentfulCommittee.edges.forEach(({ node }) => {
      createTemplatePage(
        node.node_locale,
        `/commissies/${node.slug}`,
        committeeTemplate,
        node.id
      );
    });
  }
};
