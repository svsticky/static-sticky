import React from 'react';
import Markdown from 'markdown-to-jsx';
import { graphql } from 'gatsby';
import ContentfulPage from '../components/layout/ContentfulPage';

export default ({ data }) => {
  const page = data.contentfulPage;

  return (
    <ContentfulPage page={page}>
      <Markdown>{page.content.content}</Markdown>
    </ContentfulPage>
  );
};

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    contentfulPage(id: { eq: $id }, node_locale: { eq: "nl" }) {
      title
      content {
        content
      }
    }
  }
`;
