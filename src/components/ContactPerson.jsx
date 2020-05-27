import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import { getTranslation } from '../data/i18n';

const ContactPerson = ({ contactPerson }) => (
  <ContactPersonMember>
    <div className="card">
      <Card fluid>
        <Card.Content>
          {contactPerson ? (
            <h3 className="head">{contactPerson.typeOfContact}</h3>
          ) : (
            ''
          )}
          <div className="flex-card">
            <div>
              {contactPerson.photo === null ? (
                <p>
                  {getTranslation(contactPerson.node_locale, 'board.no_photo')}
                </p>
              ) : (
                <img
                  className="member-photo"
                  alt={getTranslation(
                    contactPerson.node_locale,
                    'board.member'
                  )}
                  src={contactPerson.photo.file.url}
                />
              )}
            </div>
            <div>
              <p>
                {contactPerson.name +
                  (contactPerson.role ? ' (' + contactPerson.role + ')' : '')}
              </p>
              <p>
                Tel.:
                <a href={'tel:' + contactPerson.mobile}>
                  {' '}
                  {contactPerson.mobile}
                </a>
              </p>
              <p>
                Mail:
                <a href={'mailto:' + contactPerson.email}>
                  {' '}
                  {contactPerson.email}
                </a>
              </p>
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  </ContactPersonMember>
);

const ContactPersonMember = styled.div`
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

export default ContactPerson;
