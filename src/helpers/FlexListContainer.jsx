import React from 'react';
import styled from 'styled-components';

export const FlexListContainer = props => (
  <StyledFlexListContainer>{props.children}</StyledFlexListContainer>
);

const StyledFlexListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
