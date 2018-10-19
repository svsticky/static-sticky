import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'

const Activities = ({ data }) => {
  const activiteiten = data.allActivity.edges
  return (
    <Layout>
      {activiteiten.map(
        activity =>
          activity.node.id !== -1 ? (
            <p key={activity.node.id}>
              <img
                src={activity.node.poster}
                width="50%"
                alt={`${activity.node.name}-poster`}
              />
            </p>
          ) : (
            <p>Er zijn geen activiteiten om weer te geven</p>
          )
      )}
    </Layout>
  )
}

const ActivitiesQuery = graphql`
  query ActivitiesQuery {
    allActivity {
      edges {
        node {
          id
          name
          location
          start_date
          end_date
          poster
          fullness
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={ActivitiesQuery}
    render={data => <Activities data={data} {...props} />}
  />
)
