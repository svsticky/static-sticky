import React from 'react'
import styled from 'styled-components'
import { Card, Image } from 'semantic-ui-react'
import { graphql, StaticQuery } from 'gatsby'

class FeaturedJobs extends React.Component {
  getRandom = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  renderFeaturedJobs = jobs => {
    const featuredJobs = jobs.filter(job => job.node.featured)
    const chosenJob = this.getRandom(featuredJobs.length)
    return (
      <div className="jobsCardWrapper">
        <h3>Uitgelichte vacature</h3>
        {this.renderFeaturedJob(featuredJobs[chosenJob])}
      </div>
    )
  }

  renderFeaturedJob = job => {
    return (
      <Card
        fluid
        className="jobsCard"
        href={
          '/partners/' +
          job.node.partner.name.replace(/\W+/g, '-').toLowerCase()
        }
      >
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
    )
  }

  render() {
    return (
      <JobsWrapper>
        {this.renderFeaturedJobs(this.props.data.allContentfulJobListing.edges)}
      </JobsWrapper>
    )
  }
}

export const JobsWrapper = styled.div`
  &&& .jobsCardWrapper {
    padding-bottom: 1em;
    .jobsCard {
      margin-bottom: 2em;
    }
  }
  .logo {
    margin-bottom: 1em;
  }
`

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
)
