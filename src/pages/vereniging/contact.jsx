import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import BoardMember from '$/components/BoardMember';
import ContentfulPage from '$/components/layout/ContentfulPage';
import Markdown from 'markdown-to-jsx';

const ContactPage = props => {
  const contactPersons = props.data.allContentfulBoard.edges;
  const page = props.data.contentfulPage;
  return (
    <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
      <h3>Contact</h3>
      <ContactList>{getContactPersons(contactPersons)}</ContactList>
    </ContentfulPage>
  );
};

const getContactPersons = ContactPersons => {
  const boardmembers = contactPersons.filter(contactPerson => contactPersons.indexOf(contactPerson) !== 0);

  return boardmembers.map(contactPerson => (
    <BoardMember key={contactPerson.node.id} contactPerson={contactPerson.node} />
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
    allContentfulboardMember{
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