import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import {
  Button,
  Card,
  Header,
  Icon,
  Image,
  Grid,
  Divider,
} from 'semantic-ui-react';
import { getTranslation } from '../data/i18n';

const CommitteeView = ({ data: { contentfulCommittee: committee } }) => {
  return (
    <Layout>
      <Button
        as={Link}
        className="labeled icon basic"
        to={`/${committee.node_locale}/vereniging/commissies`}
      >
        <Icon name="angle left" />
        {getTranslation(committee.node_locale, 'committee')}
      </Button>
      <Divider hidden />

      <Grid columns={2} stackable>
        <Grid.Column width={4}>
          <Sticky>
            <Grid.Row>
              <Image
                size="medium"
                src={committee.logo.file.url}
                alt={`${committee.name} logo`}
                centered
              />
            </Grid.Row>
            {committee.emailAddress && (
              <div>
                <Divider />
                <Grid.Row>
                  <h3>Contact</h3>
                  <p>
                    <a href={'mailto:' + committee.emailAddress}>
                      {committee.emailAddress}
                    </a>
                    <br />
                  </p>
                </Grid.Row>
              </div>
            )}
          </Sticky>
        </Grid.Column>
        <Grid.Column width={9}>
          <Card fluid>
            <Header className="huge">{committee.name}</Header>
            <Markdown>{committee.description.description}</Markdown>
          </Card>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

const Sticky = styled.div`
  top: 60px; // this is the height of the navbar (probably should make that dynamic) + 10 for nice spacing
  position: sticky;
`;

export default CommitteeView;

export const CommitteeQuery = graphql`
  query CommitteeQuery($id: String!) {
    contentfulCommittee(id: { eq: $id }) {
      id
      name
      node_locale
      description {
        description
      }
      emailAddress
      logo {
        file {
          url
        }
      }
      photo {
        file {
          url
        }
      }
    }
  }
`;
