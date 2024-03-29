import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import JobItem from './JobItem';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';
import { Button } from 'semantic-ui-react';
import { Link } from 'gatsby';

class FeaturedJobs extends React.Component {
  getRandom = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  renderFeaturedJobs = jobs => {
    const language =
      typeof window !== 'undefined'
        ? getLanguage(window)
        : metadata.defaultLocale;
    const featuredJobs = jobs.filter(
      job => job.node.featured && job.node.node_locale === language
    );
    if (featuredJobs.length > 0) {
      const chosenJob = this.getRandom(featuredJobs.length - 1);
      return (
        <div>
          <h2>{getTranslation(language, 'vacancy.featured')}</h2>
          {this.renderFeaturedJob(featuredJobs[chosenJob])}
          <Button
            fluid
            primary
            as={Link}
            to={`/${language}/carriere/vacatures`}
            style={{ marginTop: '1rem' }}
          >
            {getTranslation(language, 'vacancy.more')}
          </Button>
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
              study {
                short
              }
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
