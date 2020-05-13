import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Board from '$/components/Board';
import Markdown from 'markdown-to-jsx';
import Layout from '../../components/layout/Layout';
import { device } from '../../data/Devices';
import {
  getTranslatedPage,
  getTranslation,
  getLanguage,
  metadata,
} from '../../data/i18n';

const BoardPage = props => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const boards = props.data.allContentfulBoard.edges.filter(
    content => content.node.node_locale === language // Only get the current language
  );
  const page = getTranslatedPage(props.data.allContentfulPage, language);

  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <h3>{getTranslation(language, 'board.current')}</h3>
      {getCurrentBoard(boards)}
      <h3>{getTranslation(language, 'board.old')}</h3>
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
          node_locale
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
    allContentfulPage(filter: { slug: { eq: "besturen" } }) {
      edges {
        node {
          title
          node_locale
          content {
            content
          }
        }
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
