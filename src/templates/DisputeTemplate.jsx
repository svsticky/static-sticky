import React from 'react'
import Markdown from 'markdown-to-jsx'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid, Header, Image, Divider } from 'semantic-ui-react'

const DisputeView = ({ data }) => {
  const { contentfulDispute: dispute } = data

  return (
    <Layout>
      <Grid columns={2} style={{ 'margin-top': '5px' }}>
        <Grid.Column width={3}>
          <Sticky>
            <Grid.Row>
              <Image
                size="small"
                src={dispute.logo.file.url}
                alt={`${dispute.name} logo`}
                centered
              />
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <h3>Contact</h3>
              <p>
                <a href={dispute.website}>website</a> <br />
              </p>
            </Grid.Row>
          </Sticky>
        </Grid.Column>
        <Grid.Column width={9}>
          <Header>{dispute.name}</Header>
          <Markdown>{dispute.description.description}</Markdown>
        </Grid.Column>
      </Grid>
    </Layout>
  )
}

const Sticky = styled.div`
  top: 20px;
  position: sticky;
`

export default DisputeView

export const DisputeQuery = graphql`
  query DisputeQuery($id: String!) {
    contentfulDispute(id: { eq: $id }) {
      id
      name
      website
      description {
        description
      }

      logo {
        file {
          url
        }
      }
    }
  }
`
