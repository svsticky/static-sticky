import React from 'react';
import { Grid } from 'semantic-ui-react';
import { graphql, StaticQuery } from 'gatsby';
import Board from '$/components/Board';
import Markdown from 'markdown-to-jsx';
import Layout from '../../components/layout/Layout';

const BoardPage = props => {
  const boards = props.data.allContentfulBoard.edges;
  const page = props.data.contentfulPage;
  return (
    <Layout>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <h3>Het huidig bestuur</h3>
      <Grid stretched stackable doubling columns={3}>
        {getCurrentBoard(boards)}
      </Grid>
      <h3>Oud besturen</h3>
      <Grid stretched stackable doubling columns={3}>
        {getOldBoards(boards)}
      </Grid>
    </Layout>
  );
};

const getCurrentBoard = boards => {
  const currentBoard = boards[0];

  return (
  <Grid.Column>
    <Board key={currentBoard.node.id} board={currentBoard.node} />
  </Grid.Column>
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
`;

export default props => (
  <StaticQuery
    query={BoardsQuery}
    render={data => <BoardPage data={data} {...props} />}
  />
);
