import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import BoardMember from '$/components/BoardMember';
import ContentfulPage from '$/components/layout/ContentfulPage';
import Markdown from 'markdown-to-jsx';

const ContactPage = props => {
  const contactPersons = props.data.allContentfulBoardMember.edges;
  const page = props.data.contentfulPage;
  return (
    <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
      <h3>Contact</h3>
      <ContactList>{getContactPersons(contactPersons)}</ContactList>
    </ContentfulPage>
  );
};

const getContactPersons = contactPersons => { 
  return contactPersons.map(contactPerson => (
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
  allContentfulBoardMember(sort: { fields: [order]}){
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

/*

__Algemene aangelegenheden__  
Silvan Eelman (Voorzitter)  
Tel.: 06-25536200  
Email: [voorzitter@svsticky.nl](mailto:voorzitter@svsticky.nl)

__Post en algemene communicatie__  
Stef Velzel (Secretaris)  
Tel.: 06-34091372  
Email: [secretaris@svsticky.nl](mailto:secretaris@svsticky.nl)

__Financiële aangelegenheden__  
Matthijs Ham (Penningmeester)  
Tel.: 06-21460221  
Email: [penningmeester@svsticky.nl](mailto:penningmeester@svsticky.nl)

__Interne aangelegenheden (leden/commissies)__  
Jari van Wijk (Commissaris Intern)  
Tel.: 06-14953788  
Email: [intern@svsticky.nl](mailto:intern@svsticky.nl)

__Partners en sponsors__  
Glenn Stewart (Commissaris Extern)  
Tel.: 06-29980693  
Email: [extern@svsticky.nl](mailto:extern@svsticky.nl)

__Onderwijs__  
Zoë Coenen (Commissaris Onderwijs)  
Tel.: 06-23778504  
Email: [onderwijs@svsticky.nl](mailto:onderwijs@svsticky.nl)

*/