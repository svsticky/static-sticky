import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Markdown from 'markdown-to-jsx';
import Dispute from '../../components/Dispute';
import { FlexListContainer } from '../../helpers';
import { getTranslatedPage, getLanguage, metadata } from '../../data/i18n';

const DisputeIndexPage = ({ data }) => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const disputeEdges = data.allContentfulDispute.edges.map(
    disputeEdge => disputeEdge.node
  );
  const disputes = disputeEdges.filter(
    content => content.node_locale === language // Only get the current language
  );
  const page = getTranslatedPage(data.allContentfulPage, language);

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
          node_locale
          logo {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulPage(filter: { slug: { eq: "disputen" } }) {
      edges {
        node {
          title
          node_locale
          content {
            content
          }
        }
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
