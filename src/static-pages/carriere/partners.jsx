import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Partner from '$/components/Partner';
import Markdown from 'markdown-to-jsx';
import Layout from '$/components/layout/Layout';
import { FlexListContainer } from '$/helpers';
import { getLanguage, getTranslation, metadata } from '$/data/i18n';
import MainPartner from '$/components/mainpartner/Partner';

const partition = (list, pred) => [
  list.filter(pred),
  list.filter(x => !pred(x)),
];

const PartnerIndexPage = ({ data }) => {
  const language =
    typeof window !== 'undefined'
      ? getLanguage(window)
      : metadata.defaultLocale;
  // NOTE: content.node.isMainPartner can be either true, false or null
  // not every partner has the isMainPartner field filled out, hence the null option
  const [[{ node: mainPartner }], partners] = partition(
    data.allContentfulPartner.edges,
    edge => edge.node.isMainPartner
  );
  const regPartners = partners.filter(
    content => content.node.node_locale === language // Only get the current language
  );
  const page = data.contentfulPage;

  return (
    <>
      <Layout title={page.title}>
        <h2>{page.title}</h2>
        <Markdown>{page.content.content}</Markdown>

        <h3>{getTranslation(language, 'partners.main')}</h3>
        <MainPartner partner={mainPartner}></MainPartner>

        <h3>{getTranslation(language, 'partners.regular')}</h3>
        <FlexListContainer>
          {regPartners.map(partner => (
            <Partner partner={partner.node} key={partner.node.name} />
          ))}
        </FlexListContainer>
      </Layout>
    </>
  );
};

const PartnerListQuery = graphql`
  query PartnerListQuery {
    allContentfulPartner {
      edges {
        node {
          id
          isMainPartner
          node_locale
          name
          shortText {
            shortText
          }
          slug
          website
          description {
            description
          }
          logo {
            file {
              url
            }
          }
        }
      }
    }
    contentfulPage(slug: { eq: "partners" }) {
      title
      content {
        content
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={PartnerListQuery}
    render={data => <PartnerIndexPage data={data} {...props} />}
  />
);
