import React from 'react';
import { graphql } from 'gatsby';
import ActivityCollection from '../../components/activities/ActivityCollection'
import ContentfulPage from '../../components/ContentfulPage';
import Markdown from 'markdown-to-jsx';


const Activiteiten = (props) => {
  const page = props.data.contentfulPage;
  return (
    <ContentfulPage page={page}>
      <Markdown>
        {page.content.content}
      </Markdown>
      <ActivityCollection count="all"/>
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
