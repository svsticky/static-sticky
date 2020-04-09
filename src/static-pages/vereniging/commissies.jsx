import React from 'react';
import Markdown from 'markdown-to-jsx';
import { getLanguage, metadata } from '../../data/i18n';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Committee from '../../components/Committee';
import { FlexListContainer } from '../../helpers';

const CommitteeIndexPage = ({ data }) => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const committeesNode = data.allContentfulCommittee.edges.map(
    committeeEdge => committeeEdge.node
  );
  const committees = committeesNode.filter(
    content => content.node_locale === language
  );
  const page = data.contentfulPage;

  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <FlexListContainer>
        {committees.map(committee => (
          <Committee committee={committee} key={committee.name} />
        ))}
      </FlexListContainer>
    </Layout>
  );
};

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
