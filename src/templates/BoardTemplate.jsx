import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Image, Button, Card } from 'semantic-ui-react';
import { device } from '../data/Devices';

const BoardView = ({ data }) => {
  const board = data.contentfulBoard;
  board.language = window.location.href.split('/')[3];

  return (
    <Layout title={board.name}>
      <BoardTemplateWrapper motto={board.motto} color={board.color}>
        <div>
          <div>
            <h2 className="header">{buildHeader(board)}</h2>
          </div>
          <Card fluid>
            <div className="photo-members">
              <div>
                <Image rounded size="large" src={board.photo.file.url} />
              </div>
              <div className="all-members">
                <div>
                  <p className="years">
                    <strong>{board.years}</strong>
                  </p>
                  {board.motto && <em>O.d.z "{board.motto}"</em>}
                </div>
                <h3>Bestuursleden:</h3>
                {board.members.map(member => (
                  <p key={member} className="member">
                    {member}
                  </p>
                ))}
              </div>
            </div>
          </Card>
          <div className="flex-container">{showButton(board)}</div>
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
      content={`Bestuur ${board.number - 1}`}
      to={`/${board.language}/besturen/${board.number - 1}`}
      className="button-prev"
      color={board.color}
    />
  );

  const next = (
    <Button
      as={Link}
      labelPosition="right"
      icon="right chevron"
      content={`Bestuur ${board.number + 1}`}
      to={`/${board.language}/besturen/${board.number + 1}`}
      className="button-next"
      color={board.color}
    />
  );

  return (
    <div className="button-group">
      {board.number !== 1 ? prev : null}
      <Button
        as={Link}
        content={'Terug naar overzicht'}
        to={`/${board.language}/vereniging/besturen`}
        className="button-index"
        color={board.color}
      />
      {!board.current ? next : null}
    </div>
  );
};

const BoardTemplateWrapper = styled.div`
  &&& {
    padding: 1em;
    .header {
      color: ${props => (props.color ? props.color : '#000')};
    }
    .years {
      margin-bottom: 0;
      color: ${props => (props.color ? props.color : '#000')};
    }
    .photo-members {
      display: flex;
      @media ${device.mobileMax} {
        flex-direction: column;
      }
      @media ${device.tablet} {
        flex-direction: row;
        align-items: center;
      }
    }
    .all-members {
      @media ${device.tablet} {
        margin-left: 2rem;
      }
      @media ${device.mobileMax} {
        margin-top: 1em;
      }
      h3 {
        color: ${props => (props.color ? props.color : '#000')};
      }
    }
    .flex-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .button {
        background-color: ${props => (props.color ? props.color : '#aaa')};
        color: #fff;
        margin: 0.5rem;
        @media ${device.mobileMax} {
          &-prev {
            order: 2;
            width: 11rem;
          }
          &-index {
            order: -1;
            width: 23rem;
          }
          &-next {
            order: 3;
            width: 11rem;
          }
        }
      }
    }
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
