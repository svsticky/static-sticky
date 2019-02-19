import React from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import Partner from '$/components/Partner';
import Markdown from 'markdown-to-jsx';
import Layout from '../../components/layout/Layout';

const PartnerIndexPage = ({ data }) => {
  const partners = data.allContentfulPartner.edges;
  const page = data.contentfulPage;

  return (
    <Layout>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <Grid doubling columns={4}>
        {partners.map(partner => (
          <Grid.Column key={partner.node.id}>
            <Partner partner={partner.node} />
          </Grid.Column>
        ))}
      </Grid>
    </Layout>
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
