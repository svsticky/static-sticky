import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

export const LinkLogoCard = props => {
  return (
    <StyledLinkLogoCard listItem={props.listItem}>
      <Card as={Link} to={props.url} className="card">
        {props.children}
        <Card.Content>
          <Card.Header centered>{props.name}</Card.Header>
        </Card.Content>
      </Card>
    </StyledLinkLogoCard>
  );
};

const StyledLinkLogoCard = styled.div`
  &&& {
    padding: ${props => (props.listItem ? '1rem 1rem 0 0' : '0')};
    .card {
      height: 16rem;
      width: 15rem;
    }
    .content {
      border-top: 0px;
    }
  }
`;
