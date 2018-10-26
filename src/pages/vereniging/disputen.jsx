import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ContentfulPage from '../../components/ContentfulPage'
import Markdown from 'markdown-to-jsx'
import { Grid, Image, Label } from 'semantic-ui-react'

const DisputeIndexPage = ({ data }) => {
  const disputes = data.allContentfulDispute.edges.map(
    disputeEdge => disputeEdge.node
  )
  const page = data.contentfulPage

  return <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
      <br />
      <Grid centered doubling columns={// Works as long as <= 12. Using a grid because centering is difficult.
          disputes.length} verticalAlign="middle">
        {disputes.map(dispute => (
          <Grid.Column
            width={Math.floor(12 / disputes.length)}
            key={dispute.id}
          >
            {dispute.logo === null ? (
              <Label size="huge">{dispute.name}</Label>
            ) : (
              <Image
                size="medium"
                src={dispute.logo.file.url}
                alt={`${dispute.name} logo`}
                centered
              />
            )}
          </Grid.Column>
        ))}
      </Grid>
    </ContentfulPage>
}

const DisputeListQuery = graphql`
  query DisputeListQuery {
    allContentfulDispute {
      edges {
        node {
          id
          name
          logo {
            file {
              url
            }
          }
        }
      }
    }
    contentfulPage(slug: { eq: "disputen" }) {
      title
      content {
        content
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={DisputeListQuery}
    render={data => <DisputeIndexPage data={data} {...props} />}
  />
)
