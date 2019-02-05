import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';

const BoardMember = ({ boardMember }) => (
  <BoardMemberCard color={boardMember.color}>
    <div className="card">
      <Card fluid href={'/contact/' + boardMember.number}>
        <Card.Content>
          <h3 className="head">{boardMember.typeOfContact}</h3>
          <p>{boardMember.years}</p>
          <Image
            rounded
            className="image"
            src={boardMember.photo.file.url}
            size="small"
          />
        </Card.Content>
      </Card>
    </div>
  </BoardMemberCard>
);

const BoardMemberCard = styled.div`
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

export default BoardMember;
