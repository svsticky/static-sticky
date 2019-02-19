import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'gatsby';

const JobItem = props => (
  <JobWrapper>
    <Card as={Link} fluid to={'/vacatures/' + props.job.slug} className="card">
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
      <div className="image-container">
        <Image size="small" src={props.job.partner.logo.file.url} />
      </div>
      <h4>{props.job.job_title}</h4>
      <p>{props.job.summary}</p>
    </Card>
  </JobWrapper>
);

const JobWrapper = styled.div`
  .card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .image-container {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ribbon {
    left: calc(100% + 2.5rem) !important;
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

export default JobItem;
