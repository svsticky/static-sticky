import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';

const Board = ({ board }) => (
  <BoardCard color={board.color}>
    <div className="card">
      <Card fluid href={'/besturen/' + board.number}>
        <Card.Content>
          <h3 className="head">{board.number}e bestuur</h3>
          <p>{board.years}</p>
          <Image
            rounded
            className="image"
            src={board.photo.file.url}
            size="small"
          />
        </Card.Content>
      </Card>
    </div>
  </BoardCard>
);

const BoardCard = styled.div`
  .head {
    color: ${props => (props.color ? props.color : '#000')};
    border-bottom: 1px solid #ddd;
  }
  .image {
    margin-top: 1em;
  }
  .card {
    height: 100%;
  }
`;

export default Board;
