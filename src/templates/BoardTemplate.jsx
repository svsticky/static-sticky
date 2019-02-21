import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Image, Button, Card } from 'semantic-ui-react';
import { device } from '../data/Devices';

const BoardView = ({ data }) => {
  const board = data.contentfulBoard;

  return (
    <Layout>
      <BoardTemplateWrapper motto={board.motto} color={board.color}>
        <div>
          <div>
            <h3 className="header">{buildHeader(board)}</h3>
          </div>
          <Card fluid>
          <div>
            { board.motto && <p className="motto">O.d.z "{board.motto}"</p>}
            <p className="years">{board.years}</p>
          </div>
          <div className="photo-members">
            <div>
              <Image rounded size="large" src={board.photo.file.url} />
            </div>
            <div className="all-members">
              <h3>Bestuursleden:</h3>
              {board.members.map(member => (
                <p key={member} className="member">
                  {member}
                </p>
              ))}
            </div>
          </div>
          </Card>
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
      as={ Link }
      labelPosition="left"
      icon="left chevron"
      content= {"Bestuur " + (board.number - 1)}
      to={'/besturen/' + (board.number - 1)}
      className="button"
    />
  );

  const next = (
    <Button
      as={ Link }
      labelPosition="right"
      icon="right chevron"
      content={"Bestuur " + (board.number + 1)}
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
  .years {
    padding-top: ${props => (props.motto ? '0em' : '1em')};
    margin-bottom: 1em;
  }
  .motto {
    font-style: italic;
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
      margin-left: 1em;
    }
    @media ${device.mobileMax} {
      margin-top: 1em;
    }
  }
  .member {
    //font-weight: bold;
  }
  .button-group {
    display: flex;
    justify-content: center;
    @media ${device.mobileMax} {
      align-self: center;
    }
  }
  .button {
    background-color: ${props => (props.color ? props.color : '#aaa')};
    color: #fff;
    margin-top: 1em;
    margin-right: 1em;
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
