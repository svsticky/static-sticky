import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ContentfulPage from '../../components/layout/ContentfulPage';
import Markdown from 'markdown-to-jsx';
import { Image, Card } from 'semantic-ui-react';
import styled from 'styled-components';

const CommitteeIndexPage = ({ data }) => {
  const committees = data.allContentfulCommittee.edges.map(
    committeeEdge => committeeEdge.node
  );
  const page = data.contentfulPage;

  return (
    <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
      <br />
      <Wrapper>
        <div className="ui stackable three column grid">
          {committees.map(committee => (
            <div className="column" key={committee.id}>
              <Card fluid href={'/commissies/' + committee.slug}>
                <Image
                  className="ui image white"
                  centered
                  src={committee.logo.file.url}
                  height="300pt"
                />
                <Card.Content>
                  <Card.Header>{committee.name}</Card.Header>
                  <Card.Meta>
                    {committee.year} - {committee.year + 1}
                  </Card.Meta>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </Wrapper>
    </ContentfulPage>
  );
};

export const Wrapper = styled.div`
  &&& .white {
    background: rgba(0, 0, 0, 0) !important;
  }
`;

const CommitteeListQuery = graphql`
  query CommitteeListQuery {
    allContentfulCommittee(filter: { year: { eq: 2018 } }) {
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
          year
        }
      }
    }
    contentfulPage(slug: { eq: "commissies" }) {
      title
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
