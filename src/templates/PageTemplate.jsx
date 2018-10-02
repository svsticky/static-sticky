import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Card } from 'semantic-ui-react';

const PageView = ({ data }) => {
  const page = data.contentfulPage;

  return (
    <Layout>
      <PageWrapper>
        <h1 className="title">{page.title}</h1>
        <Markdown>
          {page.content.content}
        </Markdown>
      </PageWrapper>
    </Layout>
  );
};


const PageWrapper = styled(Card)`
  padding: 1em;
  .title { 
    margin: 0; 
    padding-bottom: 0.5em;
    border-bottom: 1px solid #ececec;
  }
`;

export default PageView;


export const pageQuery = graphql`
  query pageQuery($id: String!){
    contentfulPage(id: {eq: $id}) {
      title  
      content {
        content
      }      
    }
  }
`;
