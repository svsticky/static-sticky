import React from 'react';
import Board from '../components/Board';

const BoardsList = props => {
  const boards = props.data.allContentfulBoard.edges;
  return (
    <div>
      <h1>Huidig bestuur</h1>
      <h1>Vorige besturen</h1>
      {boards.map(board =>
        <Board key={board.node.id} board={board.node} />)}
    </div>
  );
};

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

export default BoardsList;
