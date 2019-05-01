import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Markdown from 'markdown-to-jsx';
import Dispute from '../../components/Dispute';
import { FlexListContainer } from '../../helpers';

const DisputeIndexPage = ({ data }) => {
  const disputes = data.allContentfulDispute.edges.map(
    disputeEdge => disputeEdge.node
  );
  const page = data.contentfulPage;

  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <FlexListContainer>
        {disputes.map(dispute => (
          <Dispute dispute={dispute} key={dispute.name} />
        ))}
      </FlexListContainer>
    </Layout>
  );
};

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
