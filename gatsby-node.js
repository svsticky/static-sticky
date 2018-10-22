const path = require('path')
const slash = require('slash')
const axios = require('axios')
const crypto = require('crypto')
const fs = require('fs')

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  const jobTemplate = path.resolve('src/templates/JobTemplate.jsx')
  const partnerTemplate = path.resolve('src/templates/PartnerTemplate.jsx')
  const pageTemplate = path.resolve('src/templates/PageTemplate.jsx')
  const query = await graphql(`
      query PagesQuery {
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
    `)

  function createTemplatePage(url, templatePath, id){
    createPage({
      path: url,
      component: slash(templatePath),
      context: {
        id: id,
      },
    })
  }

  if(query.errors){
    throw new Error(JSON.stringify(query.errors))
  }else{
    // Create jobpages
    query.data.allContentfulJobListing.edges.forEach((({ node }) => {
      createTemplatePage(`/vacatures/${node.slug}`, jobTemplate, node.id)
    }))

    // Create partnerpages
    query.data.allContentfulPartner.edges.forEach((({ node }) => {
      createTemplatePage(`/partners/${node.slug}`, partnerTemplate, node.id)
    }))

    // Create general pages
    query.data.allContentfulPage.edges.forEach((({ node }) => {
      let url
      if(node.parentPage){
        url = node.parentPage.slug + '/' + node.slug
      }else{
        url = node.slug
      }

      const localPath = path.resolve('src', 'pages', url + '.jsx')
      fs.access(localPath, (err => {
        if(err)
          createTemplatePage(`/${url}`, pageTemplate, node.id)
        else
          createPage({
            path: `/${url}`,
            component: slash(localPath),
          })
        }
      ))
    }))
  }
}