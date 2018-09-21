import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Card from '../atoms/Card';

const Partner = ({ partner }) => (
  <PartnerLogo>
    <div className="logo-container">
      <Link to={'/partners/' + partner.name.replace(/\W+/g, '-').toLowerCase()}>
        <img
          className="logo"
          src={partner.logo.file.url}
          alt="Partner Logo"
        />
      </Link>
    </div>
  </PartnerLogo>
);

const PartnerLogo = styled(Card)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
  .logo-container {
    min-height: 500;
    display: flex;  
    align-items: center;
    justify-content: center;
    height: inherit;
    padding: 25px;
    background-color: #eee;
    .logo {
      width: auto;
      height: auto;
      margin: 0;
      transition: all 0.15s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default Partner;
