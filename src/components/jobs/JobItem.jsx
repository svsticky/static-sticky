import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'semantic-ui-react';
import StyledCard from '../atoms/Card';

const Job = props => (
  <JobWrapper>
    <StyledCard className="card">
      <div className="content-container">
        <Image
          size="small"
          centered
          className="image"
          src={props.job.partner.logo.file.url}
        />
        <h3 className="header">{props.job.job_title}</h3>
        <div className="desc">{props.job.summary}</div>
      </div>
    </StyledCard>
  </JobWrapper>
);

const JobWrapper = styled.div`
  &&& .card {
    display: grid;
    height: 100%;
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
