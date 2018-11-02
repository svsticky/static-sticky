import React from 'react';
import { graphql } from 'gatsby';
import ActivitiesWidget from '../../components/activities/ActivitiesWidget'
import ContentfulPage from '../../components/layout/ContentfulPage'
import Markdown from 'markdown-to-jsx';


const Activiteiten = (props) => {
  const page = props.data.contentfulPage;
  return (
    <ContentfulPage page={page}>
      <Markdown>
        {page.content.content}
      </Markdown>
      <ActivitiesWidget />
    </ContentfulPage>
  );
};

export const ActivitiesQuery = graphql`
  query ActivitiesQuery {
    contentfulPage(slug: {eq: "activiteiten"}) {
      title
      content {
        content
      }
    }
  }
`;


export default Activiteiten;