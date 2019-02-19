import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Image, Button } from 'semantic-ui-react';

const BoardView = ({ data }) => {
  const board = data.contentfulBoard;

  return (
    <Layout>
      <BoardTemplateWrapper color={board.color}>
        <div>
          <div>
            <h3 className="header">{buildHeader(board)}</h3>
          </div>
          <div>
            <p className="motto">O.d.z "{board.motto}"</p>
            <p>{board.years}</p>
          </div>
          <div className="photo-members">
            <div>
              <Image rounded size="medium" src={board.photo.file.url} />
            </div>
            <div>
              <p>Bestuursleden:</p>
              {board.members.map(member => (
                <p key={member} className="member">
                  {member}
                </p>
              ))}
            </div>
          </div>
          <div className="button-group">{showButton(board)}</div>
        </div>
      </BoardTemplateWrapper>
    </Layout>
  );
};

const buildHeader = board => {
  if (board.current) {
    return 'Huidig ' + board.name;
  }
  return board.name;
};

const showButton = board => {
  const prev = (
    <Button
      as={Link}
      labelPosition="left"
      icon="left chevron"
      content="vorig bestuur"
      to={'/besturen/' + (board.number - 1)}
      className="button"
    />
  );

  const next = (
    <Button
      as={Link}
      labelPosition="right"
      icon="right chevron"
      content="volgend bestuur"
      to={'/besturen/' + (board.number + 1)}
      className="button"
    />
  );

  if (board.number === 1) {
    return next;
  }
  if (board.current) {
    return prev;
  }
  return (
    <>
      {prev}
      {next}
    </>
  );
};

const BoardTemplateWrapper = styled.div`
  padding: 1em;
  .header {
    color: ${props => (props.color ? props.color : '#000')};
    border-bottom: 1px solid #ddd;
  }
  .image {
    margin-right: 1em;
  }
  .motto {
    margin-top: 1em;
    font-style: italic;
  }
  .photo-members {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .member {
    font-weight: bold;
  }
  .button-group {
    margin-top: 1em;
  }
  .button {
    background-color: #000078;
    color: #fff;
  }
`;

export const boardQuery = graphql`
  query boardQuery($id: String!) {
    contentfulBoard(id: { eq: $id }) {
      id
      name
      years
      number
      motto
      members
      color
      current
      photo {
        file {
          url
        }
      }
    }
  }
`;

export default BoardView;
