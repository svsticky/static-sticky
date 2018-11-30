import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Grid, Header, Image, Divider, List } from 'semantic-ui-react';

const CommitteeView = ({ data }) => {
  const { contentfulCommittee: committee } = data;

  return (
    <Layout>
      <Grid columns={3} style={{ 'margin-top': '5px' }} stackable>
        <Grid.Column width={4}>
          <Sticky>
            <Grid.Row>
              <Image
                src={committee.logo.file.url}
                alt={`${committee.name} logo`}
                centered
              />
            </Grid.Row>
            <Grid.Row className="members">
              <List className="divided relaxed">
                {committee.members.map(member => (
                  <List.Item>{member}</List.Item>
                ))}
              </List>
            </Grid.Row>
          </Sticky>
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid.Row>
            <Header className="huge">Commissie: {committee.name}</Header>
          </Grid.Row>
          {}
          <h4>Wat wij doen</h4>
          <Markdown>{committee.description.description}</Markdown>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    </Layout>
  );
};

const Sticky = styled.div`
  top: 0p;
  position: sticky;
  &&& .members {
    margin: 20pt;
  }
`;

export default CommitteeView;

export const CommitteeQuery = graphql`
  query CommitteeQuery($id: String!) {
    contentfulCommittee(id: { eq: $id }) {
      id
      name
      members
      year
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
