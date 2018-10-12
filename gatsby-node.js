const path = require('path')
const slash = require('slash')
const axios = require('axios')
const crypto = require('crypto')

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  const jobTemplate = path.resolve('src/templates/JobTemplate.jsx')
  const partnerTemplate = path.resolve('src/templates/PartnerTemplate.jsx')
  const pageTemplate = path.resolve('src/templates/PageTemplate.jsx')
  const query = await graphql(`
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
        allContentfulPartner {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `)

  if(query.errors){
    throw new Error(JSON.stringify(query.errors))
  }else{
    // Create jobpages
    query.data.allContentfulJobListing.edges.forEach((({ node }) => {
      createPage({
        path: `/vacatures/${node.slug}`,
        component: slash(jobTemplate),
        context: {
          id: node.id,
        },
      })
    }))

    // Create partnerpages
    query.data.allContentfulPartner.edges.forEach((({ node }) => {
      createPage({
        path: `/partners/${node.slug}`,
        component: slash(partnerTemplate),
        context: {
          id: node.id,
        },
      })
    }))

    // Create general pages
    query.data.allContentfulPage.edges.forEach((({ node }) => {
      let url
      if(node.parentPage){
        url = node.parentPage.slug + '/' + node.slug
      }else{
        url = node.slug
      }
      createPage({
        path: `/${url}`,
        component: slash(pageTemplate),
        context: {
          id: node.id,
        },
      })
    }))
  }
}

exports.sourceNodes = async({ actions }) => {
  const { createNode } = actions
  const res = await axios.get('https://koala.svsticky.nl/api/activities')

  if(typeof res === 'undefined' || res.data.length === 0){
    createEmptyActivityNode(createNode)
    return
  }

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
    }

    activityNode.internal.contentDigest = crypto.createHash('md5')
                                                .update(JSON.stringify(activityNode)).digest('hex')
    return createNode(activityNode)
  })
}

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
  }

  emptyNode.internal.contentDigest = crypto.createHash('md5')
                                           .update(JSON.stringify(emptyNode)).digest('hex')
  return createNode(emptyNode)
}
