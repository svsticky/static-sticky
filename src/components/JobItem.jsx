import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const styles = {
  header: {
    display: 'flex',
  },
  partnerLogo: {
    width: '100%',
  },
  logoContainer: {
    width: '80px',
    height: '50px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
  },
};

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

const JobCard = styled(Link)`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  padding: 8px;
  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export default Job;
