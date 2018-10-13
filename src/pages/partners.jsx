import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Partner from '../components/Partner';


const PartnerIndexPage = ({ data }) => {
  const partners = data.allContentfulPartner.edges;

  return (
    <Layout>
      <PartnerList>
        { partners.map(partner =>
          <Partner key={partner.node.id} partner={partner.node} />)
        }
      </PartnerList>
    </Layout>
  );
};

const PartnerList = styled.div`
  display: grid;
  @media (min-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);

  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);

  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);

  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  grid-template-columns: 1fr;
  grid-gap: 12px;
`;

export const PartnerListQuery = graphql`
  query PartnerListQuery {
    allContentfulPartner {
      edges {
        node {
          id
          name
          logo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
export default PartnerIndexPage;
