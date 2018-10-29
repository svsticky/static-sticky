import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Partner from '../../components/Partner';
import ContentfulPage from '../../components/ContentfulPage'
import Markdown from 'markdown-to-jsx'


const PartnerIndexPage = ({ data }) => {
  const partners = data.allContentfulPartner.edges;
  const page = data.contentfulPage;

  return (
      <ContentfulPage page = {page}>
        <Markdown>
          {page.content.content}
        </Markdown>
        <PartnerList>
          <div className="list">
            { partners.map(partner =>
              <Partner key={partner.node.id} partner={partner.node} />)
              }
          </div>
        </PartnerList>
      </ContentfulPage>
  );
};

const PartnerList = styled.div`
  .list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 20px;
    justify-items: stretch;
    grid-auto-flow: row;
  }

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
       `
export default PartnerIndexPage;
