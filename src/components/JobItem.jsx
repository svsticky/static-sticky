import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';


const Job = props => (
  <JobWrapper>
      <div className="logo-container">
        <Link to={'/partners/' + props.partner.name.replace(/\W+/g, '-').toLowerCase()}>
          <img
            className="logo"
            src={props.job.partner.logo.file.url}
            alt="Partner Logo"
          />
        </Link>
      </div>
      <Link to={'/vacatures/' + props.job.job_title.replace(/\W+/g, '-').toLowerCase()} className="content-container">
        <div>
          <h3>{props.job.job_title}</h3>
          <p>{props.job.summary}</p>
        </div>
      </Link>
  </JobWrapper>
);


const JobWrapper = styled.div`
  
`;


export default Job;
