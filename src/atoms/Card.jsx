import styled from 'styled-components';
import globals from '../styles/globals.json';

const Card = styled.div`
  border-radius: 0.35em;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 0.8em;
  background-color: white;
  &:hover {
    background-color: ${props => (props.hoverable ? `rgba(${globals.boardColor}, 0.05)` : null)}
  }
`;

export default Card;
