import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Card from 'material-ui/Card'

const Job = ({ job }) => (
  <JobCard to={'/vacatures/' + job.job_title.replace(/\W+/g, '-').toLowerCase()}>
    <div>
      <div>
        <img src={job.partner.logo.file.url} alt="Partner Logo" />
      </div>
      <div>
        {job.job_title}
        <div>
          {job.partner.name}
        </div>
      </div>
    </div>
    <div>
      <p>{job.summary}</p>
    </div>
  </JobCard>
);

const JobCard = styled(Card)`

`;

export default Job;
