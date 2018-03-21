import React from 'react';
import styled from 'styled-components';


const footer = () => (
  <Footer>
    <FooterContainer>
      <FooterItem>
        <h3>Bezoekadres</h3>
        Kamer 2.81 <br />
        Buys Ballot Gebouw <br />
        Princetonplein 5 <br />
        3584 CC UTRECHT
      </FooterItem>
      <FooterItem>
        <h3>Postadres</h3>
        Studievereniging Sticky <br />
        Princetonplein 5 <br />
        3584 CC UTRECHT
      </FooterItem>
      <FooterItem>
        <h3>Gegevens</h3>
        <strong>IBAN:</strong> NL61INGB0002877106 <br />
        <strong>BTW:</strong> NL-8173.55.303.B01 <br />
        <strong>KvK:</strong> 30220729, UTRECHT
      </FooterItem>
    </FooterContainer>
  </Footer>
);

const Footer = styled.div`
  background-color: '#efefef';
  margin-top: '20px';
  display: 'flex';
  justify-content: 'center';
  @media (max-width: 768px) {
    margin-bottom: '4.8em',
  }
`;

const FooterItem = styled.div`
  width: '200px';
  margin: '20px';
`;

const FooterContainer = styled.div`
  display: 'flex';
  flexWrap: 'wrap';
`;

export default footer;
