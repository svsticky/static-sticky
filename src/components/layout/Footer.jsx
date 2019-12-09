import React from 'react';
import styled from 'styled-components';
import { device } from '../../data/Devices';
import { Link } from 'gatsby';
import { Menu, Button } from 'semantic-ui-react';

const Footer = () => (
  <FooterWrapper>
    <div className="footer-container">
      <div className="footer-list">
        <div className="footer-item">
          <h3>Paginas</h3>
          <Button
            as={Link}
            to="/vereniging/contact"
            className="ui compact mini basic inverted buttons"
          >
            Contact
          </Button>
          <br />
          <Button
            as={Link}
            to="/vereniging/mailchimp"
            className="ui compact mini basic inverted buttons"
          >
            Mailinglijsten
          </Button>
          <br />
          <Button
            as={Link}
            to="/carriere/samenwerking"
            className="ui compact mini basic inverted buttons"
          >
            Samenwerking
          </Button>
        </div>
        <div className="footer-item">
          <h3>Bezoekadres</h3>
          Kamer 2.81 <br />
          Buys Ballot Gebouw <br />
          Princetonplein 5 <br />
          3584 CC UTRECHT
        </div>
        <div className="footer-item">
          <h3>Postadres</h3>
          Studievereniging Sticky <br />
          Princetonplein 5 <br />
          3584 CC UTRECHT
        </div>
        <div className="footer-item">
          <h3>Gegevens</h3>
          <strong>IBAN:</strong> NL61INGB0002877106 <br />
          <strong>BTW:</strong> NL-8173.55.303.B01 <br />
          <strong>KvK:</strong> 30220729, UTRECHT
        </div>
      </div>
    </div>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  background-color: #444;
  color: white;
  .footer {
    &-container {
      display: flex;
      justify-content: center;
    }
    &-list {
      display: flex;
      flex-wrap: wrap;
    }
    &-item {
      margin: 2rem;
    }
  }
  @media ${device.mobileMax} {
    padding: 1rem 0 5rem 0;
    .footer-item {
      margin: 1rem 2rem;
    }
  }
`;

export default Footer;
