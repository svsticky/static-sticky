import React from 'react';

const JobView = ({ data }) => (
  <h2>{data.contentfulJobListing.job_title}</h2>
);

export default JobView;

export const jobQuery = graphql`
  query jobQuery($id: String!){
    contentfulJobListing(id: {eq: $id}) {
      job_title
    }
  }
`;
