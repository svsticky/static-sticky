import React from 'react'
import styled from 'styled-components'

const Board = ({ board }) => (
  <BoardCard color={board.color}>
    <h3><a href={'/besturen/' + board.slug.toLowerCase()}>{board.number}e bestuur</a></h3>
    {board.years}
  </BoardCard>
)

const BoardCard = styled.div`
  border: 3px
    ${props => (props.color ? `solid ${props.color}` : 'dashed #efefef')};
  border-radius: 5px;
  padding: 5px;
`

export default Board
