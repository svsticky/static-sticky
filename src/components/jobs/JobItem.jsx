import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Image, Label } from 'semantic-ui-react';

const Job = props => (
  <JobWrapper>
    <Card className="card">
      <Label
        color={props.job.isJob ? 'blue' : 'yellow'}
        ribbon="right"
        className="ribbon"
      >
        <Icon
          name={props.job.isJob ? 'briefcase' : 'student'}
          size="large"
          className="ribbon-icon"
        />
      </Label>
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
    </Card>
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
  .desc {
    align-self: start;
  }
  .ribbon {
    padding: 0.5rem !important;
    width: 2rem;
    height: 2.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    &-icon {
      // sweet SCSS here <3
      margin: 0 !important;
    }
  }
`;

export default Job;
