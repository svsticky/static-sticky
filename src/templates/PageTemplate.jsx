import React from 'react';
import Markdown from 'markdown-to-jsx';
import { graphql } from 'gatsby';
import ContentfulPage from '../components/layout/ContentfulPage';
import styled from 'styled-components';

export default ({ data }) => {
  const page = data.contentfulPage;

  return (
    <ContentfulPage page={page}>
      <MarkdownPageStyle>
        <Markdown>{page.content.content}</Markdown>
      </MarkdownPageStyle>
    </ContentfulPage>
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

const MarkdownPageStyle = styled.div`
  .images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .images > * {
    width: 100%;
  }
`;
