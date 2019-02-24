import React from 'react';
import styled from 'styled-components';

export const ImageContainer = props => {
  return (
    <StyledImageContainer>
      <img src={props.src} alt={props.alt} />
    </StyledImageContainer>
  );
};

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  img {
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }
`;
