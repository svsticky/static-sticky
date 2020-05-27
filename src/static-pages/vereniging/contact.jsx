import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import ContactPerson from '$/components/ContactPerson';
import Layout from '../../components/layout/Layout';
import Markdown from 'markdown-to-jsx';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

const ContactPage = props => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const contactPersons = props.data.allContentfulBoardMember.edges.filter(
    content => content.node.node_locale === language // Only get the current language
  );
  console.log(props.data);
  const confidentialCounselors = props.data.allContentfulConfidentialCounselor.nodes.filter(
    content => content.node_locale === language // Only get the current language
  );
  const page = props.data.contentfulPage;
  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <ContactList>{getContactPersons(contactPersons)}</ContactList>
      <h2>{getTranslation(language, 'contacts.confidential_counselors')}</h2>
      <Markdown>{page.content.content}</Markdown>
      <ContactList>
        {getConfidentialCounselors(confidentialCounselors)}
      </ContactList>
    </Layout>
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

const getConfidentialCounselors = confidentialCounselors => {
  return confidentialCounselors.map(confidentialCounselor => (
    <ContactPerson
      key={confidentialCounselor.id}
      contactPerson={confidentialCounselor}
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
          name
          role
          email
          mobile
          order
          node_locale
          photo {
            file {
              url
            }
          }
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
    allContentfulConfidentialCounselor {
      nodes {
        id
        name
        email
        mobile
        node_locale
        photo {
          file {
            url
          }
        }
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
