import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    background-color: ${ props => props.hoverable ? 'rgba(0, 0, 120, 0.05)' : null }
  }
`

export default Card;
