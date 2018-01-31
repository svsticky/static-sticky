import React from 'react';
import JobsList from '../components/JobsList';
import JobFilter from '../components/JobFilter';

class JobIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studies_filter: [],
    };
    this.toggleStudiesFilter = this.toggleStudiesFilter.bind(this);
  }

  toggleStudiesFilter(term) {
    const studiesFilter = [...this.state.studies_filter];
    if (studiesFilter.includes(term)) {
      studiesFilter.splice(studiesFilter.indexOf(term), 1);
    } else {
      studiesFilter.push(term);
    }

    this.setState({
      studies_filter: studiesFilter,
    });
  }

  render() {
    return (
      <div>
        <h1>Vacatures</h1>
        <JobFilter
          toggleStudiesFilter={this.toggleStudiesFilter}
          studies_filter={this.state.studies_filter}
        />
        <JobsList data={this.props.data.allContentfulJobListing.edges} />
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

