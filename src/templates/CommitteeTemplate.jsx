import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Grid, Header, Image, List, Button, Icon } from 'semantic-ui-react';

const CommitteeView = ({ data: { contentfulCommittee: committee } }) => {
  return (
    <Layout>
      <Button className="labeled icon basic" href="/vereniging/commissies">
        <Icon name="angle left" />
        Commissies
      </Button>
      <Grid columns={3} style={{ 'margin-top': '5px' }} stackable>
        <Grid.Column width={4}>
          <Sticky>
            <Grid.Row>
              <Image
                className="logo"
                src={committee.logo.file.url}
                alt={`${committee.name} logo`}
                centered
              />
            </Grid.Row>
          </Sticky>
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid.Row>
            <Header className="huge">{committee.name}</Header>
          </Grid.Row>
          <Grid.Row>
            <Markdown>{committee.description.description}</Markdown>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={4}>
          <Sticky>
            <Grid.Row className="members">
              <h3>Leden</h3>
              <List className="divided relaxed">
                {committee.members.map(member => (
                  <List.Item key={member}>{member}</List.Item>
                ))}
              </List>
            </Grid.Row>
            {committee.photo && (
              <Grid.Row>
                <Image
                  src={committee.photo.file.url}
                  alt={`${committee.name} photo`}
                  centered
                />
              </Grid.Row>
            )}
          </Sticky>
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

const Sticky = styled.div`
  top: 0p;
  position: sticky;
  &&& .members {
    margin: 10pt;
  }
  .logo {
    height: 200pt;
  }
  .button {
    margin-bottom: 10pt;
    align-content: center;
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
      photo {
        file {
          url
        }
      }
    }
  }
`;
