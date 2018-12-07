import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ContentfulPage from '$/components/layout/ContentfulPage';
import Markdown from 'markdown-to-jsx';
import { Image, Label } from 'semantic-ui-react';
import styled from 'styled-components';

const DisputeIndexPage = ({ data }) => {
  const disputes = data.allContentfulDispute.edges.map(
    disputeEdge => disputeEdge.node
  );
  const page = data.contentfulPage;

  return (
    <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
      <br />
      <Centered>
        {disputes.map(dispute => (
          <div key={dispute.id}>
            {dispute.logo === null ? (
              <Label size="huge">{dispute.name}</Label>
            ) : (
              <Image
                size="medium"
                src={dispute.logo.file.url}
                alt={`${dispute.name} logo`}
                centered
                href={'/disputen/' + dispute.slug}
              />
            )}
          </div>
        ))}
      </Centered>
    </ContentfulPage>
  );
};

const Centered = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
