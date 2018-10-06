import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';


const Job = props => (
  <JobWrapper>
      <div className="logo-container">
          <Card
            href={'/partners/' + props.partner.name.replace(/\W+/g, '-').toLowerCase()}>
              <img src= {props.job.partner.logo.file.url}/>
              <Card.Content>
                <Card.Header>{props.job.job_title}</Card.Header>
                <Card.Description>{props.job.summary}</Card.Description>
              </Card.Content>
          </Card>
      </div>
  </JobWrapper>
);


const JobWrapper = styled.div`

`;


export default Job;
