import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

const ContactPerson = ({ contactPerson }) => (
  <ContactPersonMember color={contactPerson.color}>
    <div className="card">
      <Card fluid>
        <Card.Content>
          <h3 className="head">{contactPerson.typeOfContact}</h3>
          <p>{contactPerson.name + ' (' + contactPerson.role + ')'}</p>
          <p>
            Tel.:
            <a href={'tel:' + contactPerson.mobile}>{contactPerson.mobile}</a>
          </p>
          <p>
            Mail:{' '}
            <a href={'mailto:' + contactPerson.email}>{contactPerson.email}</a>
          </p>
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
`;

export default ContactPerson;
