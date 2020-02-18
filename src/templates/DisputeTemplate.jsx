import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Grid, Header, Image, Divider, Button, Icon } from 'semantic-ui-react';
import { getLanguage, metadata, getTranslation } from '../data/i18n';

const DisputeView = ({ data }) => {
  const { contentfulDispute: dispute } = data;
  let language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;

  return (
    <Layout title={data.name}>
      <Button
        as={Link}
        className="labeled icon basic"
        to={`/${dispute.node_locale}/vereniging/disputen`}
      >
        <Icon name="angle left" />
        {getTranslation(language, 'society.name')}
      </Button>
      <Divider hidden />

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
      node_locale
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
