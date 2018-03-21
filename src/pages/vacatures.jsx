import React from 'react';
import JobsList from '../components/JobsList';
import JobFilter from '../components/JobFilter';

class JobIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studiesFilter: [],
      typesFilter: [],
    };
    this.toggleStudiesFilter = this.toggleStudiesFilter.bind(this);
    this.toggleTypesFilter = this.toggleTypesFilter.bind(this);
  }

  jobs = this.props.data.allContentfulJobListing.edges;

  toggleStudiesFilter(term) {
    const studiesFilter = [...this.state.studiesFilter];
    if (studiesFilter.includes(term)) {
      studiesFilter.splice(studiesFilter.indexOf(term), 1);
    } else {
      studiesFilter.push(term);
    }

    this.setState({
      studiesFilter,
    });
  }

  toggleTypesFilter(term) {
    const typesFilter = [...this.state.typesFilter];
    if (typesFilter.includes(term)) {
      typesFilter.splice(typesFilter.indexOf(term), 1);
    } else {
      typesFilter.push(term);
    }

    this.setState({
      typesFilter,
    });
  }

  render() {
    return (
      <div>
        <h1>Vacatures</h1>
        <JobFilter
          toggleStudiesFilter={this.toggleStudiesFilter}
          studiesFilter={this.state.studiesFilter}
          toggleTypesFilter={this.toggleTypesFilter}
          typesFilter={this.state.typesFilter}
        />
        <JobsList
          jobs={this.jobs}
          studiesFilter={this.state.studiesFilter}
          typesFilter={this.state.typesFilter}
        />
      </div>
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

