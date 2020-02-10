import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import JobItem from './JobItem';

class FeaturedJobs extends React.Component {
  getRandom = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  renderFeaturedJobs = jobs => {
    const language = window.location.href.split('/')[3];
    const featuredJobs = jobs.filter(
      job => job.node.featured && job.node.node_locale === language
    );
    if (featuredJobs.length > 0) {
      const chosenJob = this.getRandom(featuredJobs.length - 1);
      return (
        <div>
          <h2>Uitgelichte Vacature</h2>
          {this.renderFeaturedJob(featuredJobs[chosenJob])}
        </div>
      );
    } else {
      return <div />;
    }
  };

  renderFeaturedJob = job => {
    return <JobItem job={job.node} />;
  };

  render() {
    return this.renderFeaturedJobs(
      this.props.data.allContentfulJobListing.edges
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulJobListing {
          edges {
            node {
              id
              job_title
              summary
              featured
              target_studies
              type
              slug
              isJob
              node_locale
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
    `}
    render={data => <FeaturedJobs data={data} {...props} />}
  />
);
