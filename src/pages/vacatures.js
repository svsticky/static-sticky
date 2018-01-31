import React from 'react';
import Link from 'gatsby-link';
import JobsList from '../components/JobsList';
import JobFilter from '../components/JobFilter';

class JobIndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studies_filter: []
        }
        this.toggleStudiesFilter = this.toggleStudiesFilter.bind(this)
    }

    toggleStudiesFilter(term) {
        let studies_filter = [...this.state.studies_filter]
        if(studies_filter.includes(term)) {
            studies_filter.splice(studies_filter.indexOf(term), 1)
        }
        else {
            studies_filter.push(term)
        }

        this.setState( ({
            studies_filter: studies_filter
        }))
    }

    render() {
        return(
            <div>
                <h1>Vacatures</h1>
                <JobFilter 
                    toggleStudiesFilter={this.toggleStudiesFilter} 
                    studies_filter={this.state.studies_filter}/>
                <JobsList data={this.props.data.allContentfulJobListing.edges} />
            </div>
        )
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

export default JobIndexPage

