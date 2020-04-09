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
  height: 10rem;
  img {
    max-height: 100%;
  }
`;
