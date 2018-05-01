import React from 'react';
import Board from '../components/Board';
import styled from 'styled-components';


const Bestuur = props => {
  const boards = props.data.allContentfulBoard.edges;
  return (
    <div>
      <BoardsList>
        {boards.map(board =>
          <Board key={board.node.id} board={board.node} />)}
      </BoardsList>
    </div>
  );
};


const BoardsList = styled.div`
  display: grid;
  @media (min-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 12px;
`


export const BoardsQuery = graphql`
  query BoardsQuery {
    allContentfulBoard(sort: {fields: [number], order: DESC}) {
      edges {
        node {
          id
          years
          number
          motto
          members
          color
          photo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;


export default Bestuur;
