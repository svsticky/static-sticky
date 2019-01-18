import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';

const NewsView = ({ data }) => {
  const article = data.contentfulNewsArticles;

  return (
    <Layout>
      <NewsTemplateWrapper>
        <div>
          <h2 className="header">{article.title}</h2>
        </div>
        <div className="date">
          <p>{article.dateOfPublishing}</p>
        </div>
        <div className="content">
          <Markdown>{article.content.content}</Markdown>
        </div>
      </NewsTemplateWrapper>
    </Layout>
  );
};

const NewsTemplateWrapper = styled.div`
  padding: 1em;
  .header {
    margin-bottom: 5px;
  }
  .date {
    font-style: italic;
    margin-bottom: 5px;
  }
  .content{
    img {max-width: 40%;}
  }
`;

export const newsQuery = graphql`
  query newsQuery($id: String!) {
    contentfulNewsArticles(id: { eq: $id }) {
      id
      title
      dateOfPublishing
      slug
      content {
        content
      }
    }
  }
`;
export default NewsView;
