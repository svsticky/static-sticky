import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';

const BoardMember = ({ contactPerson }) => (
  <ContactPersonMember color={contactPerson.color}>
    <div className="card">
      <Card fluid href={'/contact/' + contactPerson.number}>
        <Card.Content>
          <h3 className="head">{contactPerson.typeOfContact}</h3>
          <p>{contactPerson.name + " (" + contactPerson.role + ")"}</p>
          <p>{"Tel.: " + contactPerson.mobile}</p>
          <p>{"Email: " + contactPerson.email} </p>
        </Card.Content>
      </Card>
    </div>
  </ContactPersonMember>
);

const ContactPersonMember = styled.div`
  .head {
    color: ${props => (props.color ? props.color : '#000')};
    border-bottom: 1px solid #ddd;
  }
  .image {
    margin-top: 1em;
  }
  .card {
    height: 100%;
  }
`;

export default BoardMember;