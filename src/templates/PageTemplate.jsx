import React from 'react';
import Markdown from 'markdown-to-jsx';
import { graphql } from 'gatsby';
import ContentfulPage from '../components/layout/ContentfulPage';
import { Helmet } from 'react-helmet';

export default ({ data }) => {
  const page = data.contentfulPage;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{page.title}</title>
      </Helmet>
      <ContentfulPage page={page}>
        <Markdown>{page.content.content}</Markdown>
      </ContentfulPage>
    </>
  );
};

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      content {
        content
      }
    }
  }
`;
