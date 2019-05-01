import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Board from '$/components/Board';
import Markdown from 'markdown-to-jsx';
import Layout from '../../components/layout/Layout';
import { device } from '../../data/Devices';

const BoardPage = props => {
  const boards = props.data.allContentfulBoard.edges;
  const page = props.data.contentfulPage;
  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <h3>Het huidige bestuur</h3>
      {getCurrentBoard(boards)}
      <h3>Oud-besturen</h3>
      <Grid stretched stackable doubling columns={3}>
        {getOldBoards(boards)}
      </Grid>
    </Layout>
  );
};

const getCurrentBoard = boards => {
  const currentBoard = boards[0];

  return (
    <CurrentBoardWrapper>
      <div className="current-board">
        <Board key={currentBoard.node.id} board={currentBoard.node} />
      </div>
    </CurrentBoardWrapper>
  );
};

const getOldBoards = boards => {
  const oldBoards = boards.filter(board => boards.indexOf(board) !== 0);

  return oldBoards.map(board => (
    <Grid.Column key={board.node.id}>
      <Board board={board.node} />
    </Grid.Column>
  ));
};

const CurrentBoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  .current-board {
    @media ${device.tablet} {
      flex: 0.6; //Just what I liked...
    }
    @media ${device.mobileMax} {
      flex: 1;
    }
  }
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
          current
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
`;

export default props => (
  <StaticQuery
    query={BoardsQuery}
    render={data => <BoardPage data={data} {...props} />}
  />
);
