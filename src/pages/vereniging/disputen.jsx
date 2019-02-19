import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Markdown from 'markdown-to-jsx';
import { Card, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const DisputeIndexPage = ({ data }) => {
  const disputes = data.allContentfulDispute.edges.map(
    disputeEdge => disputeEdge.node
  );
  const page = data.contentfulPage;

  return (
    <Layout>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <Grid doubling columns={4}>
        {disputes.map(dispute => (
          <Grid.Column key={dispute.id}>
            <Card
              as={Link}
              to={'/disputen/' + dispute.slug}
              fluid
              style={{ height: '100%' }}
            >
              <ImageContainer>
                <img src={dispute.logo.file.url} alt={`${dispute.name} logo`} />
              </ImageContainer>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </Layout>
  );
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  img {
    width: 80%;
  }
`;

const DisputeListQuery = graphql`
  query DisputeListQuery {
    allContentfulDispute {
      edges {
        node {
          id
          name
          slug
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
`;

export default props => (
  <StaticQuery
    query={DisputeListQuery}
    render={data => <DisputeIndexPage data={data} {...props} />}
  />
);
