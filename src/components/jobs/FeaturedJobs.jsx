import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';
import { graphql, StaticQuery, Link } from 'gatsby';

class FeaturedJobs extends React.Component {
  getRandom = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  renderFeaturedJobs = jobs => {
    const featuredJobs = jobs.filter(job => job.node.featured);
    if (featuredJobs.length > 0) {
      const chosenJob = this.getRandom(featuredJobs.length - 1);
      return (
        <div>
          <h3>Uitgelichte vacature</h3>
          {this.renderFeaturedJob(featuredJobs[chosenJob])}
        </div>
      );
    }
  };

  renderFeaturedJob = job => {
    return (
      <Card as={ Link } fluid to={'/vacatures/' + job.node.slug}>
        <Card.Content>
          <Image
            size="small"
            src={job.node.partner.logo.file.url}
            className="logo"
          />
          <Card.Header>{job.node.job_title}</Card.Header>
          <Card.Description>{job.node.summary}</Card.Description>
        </Card.Content>
      </Card>
    );
  };

  render() {
    return (
      <JobsWrapper>
        {this.renderFeaturedJobs(this.props.data.allContentfulJobListing.edges)}
      </JobsWrapper>
    );
  }
}

export const JobsWrapper = styled.div`
  .logo {
    margin-bottom: 1em;
  }
`;

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
