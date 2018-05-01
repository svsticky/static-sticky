import React from 'react';
import styled from 'styled-components';


const Board = ({board}) => {
  return (
    <BoardCard color={board.color}>
      <h3>{board.number}e bestuur</h3>
      {board.years}
    </BoardCard>
  )
};


const BoardCard = styled.div`
  border: 3px ${props => props.color ? `solid ${props.color}` : 'dashed #efefef'};
  border-radius: 5px;
  padding: 5px;
`;


export default Board;