import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import { getTranslation } from '../data/i18n';

const HonaryMember = ({ honaryMember }) => (
  <HonaryPersonMember color={honaryMember.color}>
    <div className="card">
      <Card fluid>
        <Card.Content>
          <h3 className="head">{honaryMember.name + ' (' + honaryMember.year + ')'}</h3>
          <div className="flex-card">
            <div>
              {honaryMember.photo === null ? (
                <p>
                  {getTranslation(honaryMember.node_locale, 'board.no_photo')}
                </p>
              ) : (
                <img
                  className="member-photo"
                  alt={getTranslation(
                    honaryMember.node_locale,
                    'honary.member'
                  )}
                  src={honaryMember.photo.file.url}
                />
              )}
            </div>
            <div>
              <p>
                {honaryMember.description}
              </p>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  </HonaryPersonMember>
);

const HonaryPersonMember = styled.div`
  .head {
    color: ${props => (props.color ? props.color : '#000')};
  }
  .card {
    height: 100%;
  }
  .flex-card {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }
  .member-photo {
    max-width: 100px;
    border-radius: 90px;
    margin-right: 5px;
  }
`;

export default HonaryMember;
