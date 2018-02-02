import React from 'react';
import JobsList from '../components/JobsList';
import JobFilter from '../components/JobFilter';

class JobIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studiesFilter: [],
    };
    this.toggleStudiesFilter = this.toggleStudiesFilter.bind(this);
  }

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

  render() {
    return (
      <div>
        <h1>Vacatures</h1>
        <JobFilter
          toggleStudiesFilter={this.toggleStudiesFilter}
          studiesFilter={this.state.studiesFilter}
        />
        <JobsList
          data={this.props.data.allContentfulJobListing.edges}
          studiesFilter={this.state.studiesFilter}
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

