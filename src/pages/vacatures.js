import React from 'react';
import Link from 'gatsby-link';
import JobsList from '../components/JobsList';

class JobIndexPage extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
                <h1>Vacatures</h1>
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

