const path = require('path');
const slash = require('slash');
const fs = require('fs');
const metadata = require('./gatsby-config.js').siteMetadata;
const util = require('util');

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
    await Promise.all(
      query.data.allContentfulJobListing.edges.map(async ({ node }) => {
        createTemplatePage(
          node.node_locale,
          `/vacatures/${node.slug}`,
          jobTemplate,
          node.id
        );
      })
    );

    // Create partnerpages
    await Promise.all(
      query.data.allContentfulPartner.edges.map(async ({ node }) => {
        createTemplatePage(
          node.node_locale,
          `/partners/${node.slug}`,
          partnerTemplate,
          node.id
        );
      })
    );

    // Create boardpages
    await Promise.all(
      query.data.allContentfulBoard.edges.map(async ({ node }) => {
        createTemplatePage(
          node.node_locale,
          `/besturen/${node.number}`,
          boardTemplate,
          node.id
        );
      })
    );

    await Promise.all(
      query.data.allContentfulNewsArticles.edges.map(async ({ node }) => {
        createTemplatePage(
          node.node_locale,
          `/news/${node.slug}`,
          newsTemplate,
          node.id
        );
      })
    );

    console.log('before general');
    // Create general pages
    await Promise.all(
      query.data.allContentfulPage.edges.map(async ({ node }) => {
        let url;
        if (node.parentPage) {
          url = node.parentPage.slug + '/' + node.slug;
        } else {
          url = node.slug;
        }

        const localPath = path.resolve('src', 'static-pages', url + '.jsx');
        // Check asynchronously if we have the page locally.
        try {
          await fs.promises.access(localPath, fs.R_OK);
        } catch (err) {
          if (err) {
            createTemplatePage(
              node.node_locale,
              `/${url}`,
              pageTemplate,
              node.id
            );
          }
        }
      })
    );

    console.log('general finished');

    await Promise.all(
      query.data.allContentfulDispute.edges.map(async ({ node }) => {
        createTemplatePage(
          node.node_locale,
          `/disputen/${node.slug}`,
          disputeTemplate,
          node.id
        );
      })
    );

    await Promise.all(
      query.data.allContentfulCommittee.edges.map(async ({ node }) => {
        createTemplatePage(
          node.node_locale,
          `/commissies/${node.slug}`,
          committeeTemplate,
          node.id
        );
      })
    );
  }
};
