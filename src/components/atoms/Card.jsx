import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

const ExportCard = ({ children }) => {
  return <StyledCard fluid>{children}</StyledCard>;
};

const StyledCard = styled(Card)`
  &&& {
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export default ExportCard;
