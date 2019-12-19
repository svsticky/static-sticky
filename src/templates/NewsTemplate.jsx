import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Card } from 'semantic-ui-react';
import Layout from '../components/layout/Layout';

const NewsView = ({ data }) => {
  const article = data.contentfulNewsArticles;

  return (
    <Layout title={article.title}>
      <NewsTemplateWrapper>
        <div className="header">
          <h2>{article.title}</h2>
          <p className="date">
            <i>{article.dateOfPublishing}</i>
          </p>
        </div>
        <Card fluid>
          <div className="content">
            <Markdown>{article.content.content}</Markdown>
          </div>
        </Card>
      </NewsTemplateWrapper>
    </Layout>
  );
};

const NewsTemplateWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    .date {
      font-size: 20px;
    }
  }
  .content {
    img {
      max-width: 40%;
    }
  }
`;

export const newsQuery = graphql`
  query newsQuery($id: String!) {
    contentfulNewsArticles(id: { eq: $id }, node_locale: { eq: "nl" }) {
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
