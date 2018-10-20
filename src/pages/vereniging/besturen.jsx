import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Board from '../../components/Board';
import ContentfulPage from '../../components/ContentfulPage';
import Markdown from 'markdown-to-jsx';


const Bestuur = (props) => {
  const boards = props.data.allContentfulBoard.edges;
  const page = props.data.contentfulPage;
  return (
    <ContentfulPage page={page}>
      <Markdown>
        {page.content.content}
      </Markdown>
      <CurrentBoard>
        {getCurrentBoard(boards)}
      </CurrentBoard>
      <BoardsList>
        {getOldBoards(boards)}
      </BoardsList>
    </ContentfulPage>
  );
};

const getCurrentBoard = boards => {
  const currentBoard = boards[0]

  return (
    <Board key={currentBoard.node.id} board={currentBoard.node}/>
  )
}

const getOldBoards = boards => {
  const oldBoards = boards.filter(board => boards.indexOf(board) !== 0)

  return (
    oldBoards.map(board =>
      <Board key={board.node.id} board={board.node}/>)
  )
}

const CurrentBoard = styled.div`

`

const BoardsList = styled.div`
  margin-top: 10pt;
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
`;


export const BoardsQuery = graphql`
  query BoardsQuery {
    allContentfulBoard(sort: {fields: [number], order: DESC}) {
      edges {
        node {
          id
          slug
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
    contentfulPage(slug: {eq: "besturen"}) {
      title
      content {
        content
      }
    }
  }
`;


export default Bestuur;
