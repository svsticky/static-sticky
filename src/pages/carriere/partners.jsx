import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Partner from '$/components/Partner';
import Markdown from 'markdown-to-jsx';
import Layout from '../../components/layout/Layout';
import { FlexListContainer } from '../../helpers';
import { Helmet } from 'react-helmet';

const PartnerIndexPage = ({ data }) => {
  const partners = data.allContentfulPartner.edges;
  const page = data.contentfulPage;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{page.title}</title>
      </Helmet>
      <Layout>
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
