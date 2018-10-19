import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby'
import Board from '../../components/Board';
import ContentfulPage from '../../components/ContentfulPage';
import Markdown from 'markdown-to-jsx';


const BoardPage = props => {
  const boards = props.data.allContentfulBoard.edges
  const page = props.data.contentfulPage
  return (
    <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
      <BoardsList>
        {boards.map(board => (
          <Board key={board.node.id} board={board.node} />
        ))}
      </BoardsList>
    </ContentfulPage>
  )
}


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
`;


const BoardsQuery = graphql`
  query BoardsQuery {
    allContentfulBoard(sort: { fields: [number], order: DESC }) {
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
    contentfulPage(slug: { eq: "besturen" }) {
      title
      content {
        content
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={BoardsQuery}
    render={data => <BoardPage data={data} {...props} />}
  />
)
