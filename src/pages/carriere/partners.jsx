import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Partner from '$/components/Partner';
import ContentfulPage from '$/components/layout/ContentfulPage';
import Markdown from 'markdown-to-jsx';

const PartnerIndexPage = ({ data }) => {
  const partners = data.allContentfulPartner.edges;
  const page = data.contentfulPage;

  return (
    <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
      <PartnerList>
        <Grid stretched doubling stackable columns={4}>
          {partners.map(partner => (
            <Grid.Column>
              <Partner key={partner.node.id} partner={partner.node}/>
            </Grid.Column>
          ))}
        </Grid>
      </PartnerList>
    </ContentfulPage>
  );
};

const PartnerList = styled.div`
`;

export const PartnerListQuery = graphql`
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
