import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

const PageView = ({ data }) => {
  const page = data.contentfulPage;

  return(
    <PageWrapper>
      <h1>{page.title}</h1>
      <Markdown>
        {page.content.content}
      </Markdown>
    </PageWrapper>
  );
};


const PageWrapper = styled.div`

`

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
