import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import JobsList from '../components/JobsList';
import JobFilter from '../components/JobFilter';


class JobIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studiesFilter: [],
      typesFilter: [],
    };
  }

  updateStudiesFilter = (selectedStudies) => {
    this.setState({ studiesFilter: selectedStudies });
  }

  updateTypesFilter = (selectedTypes) => {
    this.setState({ typesFilter: selectedTypes });
  }

  render() {
    return (
      <Layout>
        <JobFilter
          updateStudiesFilter={this.updateStudiesFilter}
          studiesFilter={this.state.studiesFilter}
          updateTypesFilter={this.updateTypesFilter}
          typesFilter={this.state.typesFilter}
        />
        <JobsList
          jobs={this.props.data.allContentfulJobListing.edges}
          studiesFilter={this.state.studiesFilter}
          typesFilter={this.state.typesFilter}
        />
      </Layout>
    );
  }
}


export const JobsListQuery = graphql`
  query JobsListQuery {
    allContentfulJobListing {
      edges {
        node {
          id
          job_title
          summary
          featured
          target_studies
          type
          partner {
            name
            logo {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`;


export default JobIndexPage;

