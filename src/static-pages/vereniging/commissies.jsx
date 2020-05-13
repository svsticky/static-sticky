import React from 'react';
import Markdown from 'markdown-to-jsx';
import { getLanguage, metadata } from '../../data/i18n';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Committee from '../../components/Committee';
import { FlexListContainer } from '../../helpers';
import { getTranslatedPage } from '../../data/i18n';

const CommitteeIndexPage = ({ data }) => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const committeesNode = data.allContentfulCommittee.edges.map(
    committeeEdge => committeeEdge.node
  );
  const committees = committeesNode
    .filter(content => content.node_locale === language)
    .sort((a, b) => a.name.localeCompare(b.name));

  const page = getTranslatedPage(data.allContentfulPage, language);

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
    allContentfulPage(filter: { slug: { eq: "commissies" } }) {
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
    query={CommitteeListQuery}
    render={data => <CommitteeIndexPage data={data} {...props} />}
  />
);
