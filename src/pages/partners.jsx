import React from 'react';
import Partner from '../components/Partner';


const PartnerIndexPage =  ({data}) => {
  const partners = data.allContentfulPartner.edges;

  return(
    <div>
      { partners.map(partner => 
        <Partner key={partner.node.id} partner={partner.node}/>)
      }
    </div>
  );
};


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


export default PartnerIndexPage