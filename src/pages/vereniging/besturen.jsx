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
      <h3>Het huidig bestuur</h3>
      <CurrentBoard>        
        {getCurrentBoard(boards)}
      </CurrentBoard>
      <h3>Oud besturen</h3>
      <BoardsList>
        {getOldBoards(boards)}
      </BoardsList>
    </ContentfulPage>
  );
};

const getCurrentBoard = (boards) => {
  const currentBoard = boards[0]

  return (
    <Board key={currentBoard.node.id} board={currentBoard.node}/>
  )
}

const getOldBoards = (boards) => {
  const oldBoards = boards.filter(board => boards.indexOf(board) !== 0)

  return (
    oldBoards.map(board =>
      <Board key={board.node.id} board={board.node}/>)
  )
}

const CurrentBoard = styled.div`
  margin-top: 1em;
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
  grid-gap: 1em;
`

const BoardsList = styled.div`
  margin-top: 1em;
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
  grid-gap: 1em;
`;


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
    contentfulPage(slug: {eq: "besturen"}) {
      title
      content {
        content
      }
    }
  }
`;


export default Bestuur;
