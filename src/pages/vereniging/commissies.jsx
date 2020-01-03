import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import ContentfulPage from '../../components/layout/ContentfulPage';
import Markdown from 'markdown-to-jsx';
import { Image, Card, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const CommitteeIndexPage = ({ data }) => {
  const language = localStorage.getItem('language');
  const committeesNode = data.allContentfulCommittee.edges.map(
    committeeEdge => committeeEdge.node
  );
  const committees = committeesNode.filter(
    content => content.node_locale === language
  );
  const page = data.contentfulPage;

  return (
    <ContentfulPage page={page}>
      <Grid doubling stackable centered columns={3}>
        {committees.map(committee => (
          <Grid.Column key={committee.id}>
            <Card
              as={Link}
              fluid
              to={`/${committee.node_locale}/commissies/${committee.slug}`}
            >
              <WhiteBackgroundImage
                className="white"
                centered
                src={committee.logo.file.url}
                height="300pt"
              />
              <Card.Content>
                <Card.Header>{committee.name}</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
      <br />
      <Markdown>{page.content.content}</Markdown>
    </ContentfulPage>
  );
};

const WhiteBackgroundImage = styled(Image)`
  &&& {
    background: rgba(0, 0, 0, 0);
  }
`;

const CommitteeListQuery = graphql`
  query CommitteeListQuery {
    allContentfulCommittee {
      edges {
        node {
          id
          node_locale
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
    contentfulPage(slug: { eq: "commissies" }) {
      title
      node_locale
      content {
        content
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={CommitteeListQuery}
    render={data => <CommitteeIndexPage data={data} {...props} />}
  />
);
