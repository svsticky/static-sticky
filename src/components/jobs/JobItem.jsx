import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Card, Image } from 'semantic-ui-react';

const Job = props => (
  <JobWrapper>
    <Card as={ Link } fluid className="card" to={'/vacatures/' + props.job.slug}>
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
);

const JobWrapper = styled.div`
  &&& .card {
    height: 100%;
    padding: 10px;
  }
  .content-container {
    display: grid;
    grid-template-rows: 150px auto auto;
  }
  .image {
    align-self: center;
  }
  .header {
  }
  .desc {
    align-self: start;
  }
`;

export default Job;
