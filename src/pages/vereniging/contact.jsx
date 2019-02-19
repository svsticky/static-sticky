import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import ContactPerson from '$/components/ContactPerson';
import ContentfulPage from '$/components/layout/ContentfulPage';
import Markdown from 'markdown-to-jsx';

const ContactPage = props => {
  const contactPersons = props.data.allContentfulBoardMember.edges;
  const page = props.data.contentfulPage;
  return (
    <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
      <ContactList>{getContactPersons(contactPersons)}</ContactList>
    </ContentfulPage>
  );
};

const getContactPersons = contactPersons => {
  return contactPersons.map(contactPerson => (
    <ContactPerson
      key={contactPerson.node.id}
      contactPerson={contactPerson.node}
    />
  ));
};

const ContactList = styled.div`
  margin-top: 1em;
  display: grid;
  @media (min-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 1em;
`;

const boardMemberQuery = graphql`
  query boardMemberQuery {
    allContentfulBoardMember(sort: { fields: [order] }) {
      edges {
        node {
          id
          topic
          name
          role
          email
          mobile
          order

          typeOfContact
        }
      }
    }
    contentfulPage(slug: { eq: "contact" }) {
      title
      content {
        content
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={boardMemberQuery}
    render={data => <ContactPage data={data} {...props} />}
  />
);
