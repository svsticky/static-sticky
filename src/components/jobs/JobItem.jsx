import React from 'react'
import styled from 'styled-components'
import { Card, Image } from 'semantic-ui-react'

const Job = props => (
  <JobWrapper>
    <Card
      fluid
      className="card"
      href={
        '/partners/' + props.partner.name.replace(/\W+/g, '-').toLowerCase()
      }
    >
      <Card.Content className="content-container">
        <Image
          size="small"
          centered
          className="image"
          src={props.job.partner.logo.file.url}
        />
        <Card.Header className="header">{props.job.job_title}</Card.Header>
        <Card.Description className="desc">
          {props.job.summary}
        </Card.Description>
      </Card.Content>
    </Card>
  </JobWrapper>
)

const JobWrapper = styled.div`
  &&& .card {
    display: grid;
    height: 100%;
  }
  .content-container {
    display: grid;
    grid-template-rows: 150px 5% 50%;
    grid-template-columns: 100%;
    row-gap: 5px;
    grid-auto-flow: row;
  }
  .image {
    align-self: center;
  }
  .header {
  }
  .desc {
    align-self: start;
  }
`

export default Job
