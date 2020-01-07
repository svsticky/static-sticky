import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Partner from '$/components/Partner';
import Markdown from 'markdown-to-jsx';
import Layout from '../../components/layout/Layout';
import { FlexListContainer } from '../../helpers';

const PartnerIndexPage = ({ data }) => {
  const language = window.location.href.split('/')[3];
  const partners = data.allContentfulPartner.edges.filter(
    content => content.node.node_locale === language // Only get the current language
  );
  const page = data.contentfulPage;

  return (
    <>
      <Layout title={page.title}>
        <h2>{page.title}</h2>
        <Markdown>{page.content.content}</Markdown>
        <FlexListContainer>
          {partners.map(partner => (
            <Partner partner={partner.node} key={partner.node.name} />
          ))}
        </FlexListContainer>
      </Layout>
    </>
  );
};

const PartnerListQuery = graphql`
  query PartnerListQuery {
    allContentfulPartner {
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
    contentfulPage(slug: { eq: "partners" }) {
      title
      content {
        content
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={PartnerListQuery}
    render={data => <PartnerIndexPage data={data} {...props} />}
  />
);
