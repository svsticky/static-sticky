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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 10rem;
  align-items: center;
  img {
    max-height: 100%;
    height: auto;
    max-width: 100%;
  }
`;
