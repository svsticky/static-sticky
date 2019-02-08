import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Card, Image } from 'semantic-ui-react';

const JobItem = props => (
  <JobWrapper>
    <Card as={ Link } fluid to={'/vacatures/' + props.job.slug} className="card">
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
    display: grid;
    height: 100%;
    padding: 5px;
  }
  .content-container {
    display: grid;
    grid-template-rows: 150px auto auto;
  }
  .image {
    align-self: center;
  }
  .desc {
    align-self: start;
  }
`;

export default JobItem;
