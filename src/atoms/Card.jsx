import styled from 'styled-components';
import globals from '../styles/globals.json';

const Card = styled.div`
  border-radius: 0.35em;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  padding: 0.5em;
  background-color: white;
  &:hover {
    background-color: ${props => (props.hoverable ? `rgba(${globals.boardColor}, 0.05)` : null)}
  }
`;

export default Card;
