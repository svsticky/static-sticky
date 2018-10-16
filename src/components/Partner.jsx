import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Card, Image } from 'semantic-ui-react';

const Partner = ({ partner }) => (
  <PartnerLogo>
    <Card fluid className="card" color="grey"
          href={'/partners/' + partner.name.replace(/\W+/g, '-').toLowerCase()}>
      <Card.Content className="logo-container">
      <Image
        centered
        size="small"
        className="logo"
        src={partner.logo.file.url}
        alt="Partner logo"/>
      </Card.Content>
    </Card>
  </PartnerLogo>
)

const PartnerLogo = styled.div`
  .card{
    display: flex;
    height: 100%;
  }
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;

    .logo {
      width: auto;
      height: auto;
      margin: 0;
      transition: all 0.15s;
    }
  }
`

export default Partner
