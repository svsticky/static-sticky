import React from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';


const displayJobs = (studiesFilter, typesFilter, jobs) => {
  if (studiesFilter.length === 0 && typesFilter.length === 0) {
    return (jobs.map(job =>
    <JobItem key={job.node.id} job={job.node} partner={job.node.partner} />))
  }
  const jobSuperFilter = jobs.filter(job =>
    job.target_studies.some(studie => studiesFilter.indexOf(studie) >= 0) &&
    job.target_studies.some(type => typesFilter.indexOf(type) >= 0));

  if (studiesFilter.length > 0 && typesFilter.length > 0 && jobSuperFilter.length > 0) {
    return (jobSuperFilter.map(job =>
      <JobItem key={job.node.id} job={job.node} partner={job.node.partner} />));
    }
  return false;
};


const jobslist = props => (
  <JobsList>
    {displayJobs(props.studiesFilter, props.typesFilter, props.jobs)}
  </JobsList>
);


const JobsList = styled.div`
  display: grid;
  @media (min-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-template-columns: 1fr;
  grid-gap: 1em;
`;


export default jobslist;
