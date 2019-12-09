import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Grid, Header, Image, Divider } from 'semantic-ui-react';

const DisputeView = ({ data }) => {
  const { contentfulDispute: dispute } = data;

  return (
    <Layout title={data.name}>
      <Grid columns={2} stackable>
        <Grid.Column width={4}>
          <Sticky>
            <Grid.Row>
              <Image
                size="medium"
                src={dispute.logo.file.url}
                alt={`${dispute.name} logo`}
                centered
              />
            </Grid.Row>
            {dispute.website && (
              <div>
                <Divider />
                <Grid.Row>
                  <h3>Contact</h3>
                  <p>
                    <a href={dispute.website} rel="noopener noreferrer">
                      website
                    </a>
                    <br />
                  </p>
                </Grid.Row>
              </div>
            )}
          </Sticky>
        </Grid.Column>
        <Grid.Column width={9}>
          <Header className="huge">{dispute.name}</Header>
          <Markdown>{dispute.description.description}</Markdown>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

const Sticky = styled.div`
  top: 20px;
  position: sticky;
`;

export default DisputeView;

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
`;
