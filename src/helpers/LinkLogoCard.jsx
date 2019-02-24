import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import { device } from '../data/Devices';

export const LinkLogoCard = props => {
  return (
    <StyledLinkLogoCard>
      <Card as={Link} to={props.url} className="card">
        {props.children}
      </Card>
    </StyledLinkLogoCard>
  );
};

const StyledLinkLogoCard = styled.div`
  padding: 1rem 1rem 0 0;
  .card {
    height: 11rem;
    width: 11rem;
    @media ${device.tablet} {
      height: 15rem;
      width: 15rem;
    }
  }
`;
