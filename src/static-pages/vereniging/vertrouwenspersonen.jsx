import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import ContactPerson from '$/components/ContactPerson';
import Layout from '../../components/layout/Layout';
import Markdown from 'markdown-to-jsx';
import { Card } from 'semantic-ui-react';
import { getLanguage, metadata } from '../../data/i18n';

const ContactPage = props => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  const confidentialCounselors = props.data.allContentfulConfidentialCounselor.nodes.filter(
    content => content.node_locale === language // Only get the current language
  );
  const page = props.data.contentfulPage;
  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Card fluid>
        <Markdown>{page.content.content}</Markdown>
      </Card>
      <ContactList>
        {getConfidentialCounselors(confidentialCounselors)}
      </ContactList>
    </Layout>
  );
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

const confidentialCounselorsQuery = graphql`
  query confidentialCounselorsQuery {
    contentfulPage(slug: { eq: "vertrouwenspersonen" }) {
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
    query={confidentialCounselorsQuery}
    render={data => <ContactPage data={data} {...props} />}
  />
);
