import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { device } from '../data/Devices';

const Board = ({ board }) => (
  <BoardCard color={board.color} current={board.current}>
    <div className="card-container">
      <Card
        fluid
        as={Link}
        to={`/${board.node_locale}/besturen/${board.number}`}
        className="board-card"
      >
        <Image centered rounded className="image" src={board.photo.file.url} />
        <Card.Content>
          <h3 className="head">Bestuur {board.number}</h3>
          <p>{board.years}</p>
        </Card.Content>
      </Card>
    </div>
  </BoardCard>
);

const BoardCard = styled.div`
  &&& {
    .head {
      color: ${props => (props.color ? props.color : '#000')};
      margin-bottom: 0;
    }
    .card-container {
      height: 100%;
    }
    .board-card {
      padding: 0 !important;
      @media ${device.mobileMax} {
        width: 300px;
        height: auto;
        margin: auto;
      }
    }
    .image {
      width: 100%;

      @media ${device.tablet} {
        max-height: ${props => (props.current ? '100%' : '220px')};
      }
      @media ${device.mobileMax} {
        max-height: ${props => (props.current ? '300px' : '200px')};
      }
    }
  }
`;

export default Board;
