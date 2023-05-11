import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import ContactPerson from '$/components/ContactPerson';
import Layout from '../../components/layout/Layout';
import Markdown from 'markdown-to-jsx';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';
import { Card } from 'semantic-ui-react';

const ContactPage = props => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const contactPersons = props.data.allContentfulBoardMember.edges.filter(
    content => content.node.node_locale === language // Only get the current language
  );
  const page = props.data.contentfulPage;
  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Markdown>{page.content.content}</Markdown>
      <ContactList>
        {getContactPersons(contactPersons)}

        <Card fluid>
          <Card.Content>
            <h3>{getTranslation(language, 'contact.visiting_address')}</h3>
            {getTranslation(language, 'contact.building')} <br />
            {getTranslation(language, 'contact.room')} <br />
            {getTranslation(language, 'contact.address_1')} <br />
            {getTranslation(language, 'contact.address_2')}
          </Card.Content>
        </Card>

        <Card fluid>
          <Card.Content>
            <h3>{getTranslation(language, 'contact.postal_address')}</h3>
            {getTranslation(language, 'contact.name')},{' '}
            {getTranslation(language, 'contact.building')}
            <br />
            {getTranslation(language, 'contact.address_1')} <br />
            {getTranslation(language, 'contact.address_2')}
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <h3>{getTranslation(language, 'contact.data')}</h3>
            <strong>{getTranslation(language, 'contact.iban')}:</strong>{' '}
            {getTranslation(language, 'contact.iban_no')} <br />
            <strong>{getTranslation(language, 'contact.mail')}:</strong>{' '}
            <a
              primary
              href={
                'mailto:' + getTranslation(language, 'contact.mail_address')
              }
              fluid
            >
              {getTranslation(language, 'contact.mail_address')} <br />
            </a>
            <strong>{getTranslation(language, 'contact.vat')}:</strong>{' '}
            {getTranslation(language, 'contact.vat_no')} <br />
            <strong>{getTranslation(language, 'contact.kvk')}:</strong>{' '}
            {getTranslation(language, 'contact.kvk_no')}
          </Card.Content>
        </Card>
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

  .ui.fluid.card {
    margin: 0;
  }
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
  }
`;

export default props => (
  <StaticQuery
    query={boardMemberQuery}
    render={data => <ContactPage data={data} {...props} />}
  />
);
