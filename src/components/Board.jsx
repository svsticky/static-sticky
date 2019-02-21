import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'gatsby';

const Board = ({ board }) => (
  <BoardCard color={board.color}>
    <div className="card">
      <Card fluid as={ Link } to={'/besturen/' + board.number}>
        <Image
          centered
          rounded
          className="image"
          src={board.photo.file.url}
        />
        <Card.Content>
          <h3 className="head">{board.number}e bestuur</h3>
          <p>{board.years}</p>
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
  .card {
    height: 100%;
  }
  .image {
    height: 200px;
  }
`;

export default Board;
