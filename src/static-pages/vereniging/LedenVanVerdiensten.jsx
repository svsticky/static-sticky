import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import HonaryMember from '$/components/HonaryMember';
import Layout from '../../components/layout/Layout';
import Markdown from 'markdown-to-jsx';
import { getLanguage, metadata } from '../../data/i18n';

const HonourPage = props => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const honourPersons = props.data.allContentfulHonaryMember.edges.filter(
    content => content.node.node_locale === language // Only get the current language
  );
  const page = props.data.contentfulPage;
  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <HonourList>{getHonourPersons(honourPersons)}</HonourList>
    </Layout>
  );
};

const getHonourPersons = honourPersons => {
  return honourPersons.map(honaryMember => (
    <HonaryMember
      key={honaryMember.node.id}
      honaryMember={honaryMember.node}
    />
  ));
};

const HonourList = styled.div`
  margin-top: 1em;
  display: grid;
  @media (min-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 1em;
`;

const honourMemberQuery = graphql`
  query honourMemberQuery {
    allContentfulHonaryMember(sort: { fields: [year] }) {
      edges {
        node {
          name
          description
          node_locale
          year
          photo {
            file {
              url
            }
          }
        }
      }
    }
    contentfulPage(slug: { eq: "LedenVanVerdiensten" }) {
      title
      content {
        content
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={honourMemberQuery}
    render={data => <HonourPage data={data} {...props} />}
  />
);
