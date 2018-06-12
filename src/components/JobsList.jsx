import React from 'react';
import JobItem from './JobItem';
import styled from 'styled-components';


const displayJob = (studiesFilter, typesFilter, job) => {
  if (studiesFilter.length === 0 && typesFilter.length === 0) {
    return true;
  }
  const inStudiesFilter = (job.target_studies.some(studie => studiesFilter.indexOf(studie) >= 0));
  const inTypesFilter = (job.type.some(type => typesFilter.indexOf(type) >= 0));
  if ((inStudiesFilter && typesFilter.length === 0) || (inTypesFilter && studiesFilter.length === 0)) {
    return true;
  }
  if (studiesFilter.length > 0 && typesFilter.length > 0) {
    return (inStudiesFilter && inTypesFilter);
  }
  return false;
};


const jobslist = props => (
  <JobsList>
    {props.jobs.map(job =>
      displayJob(props.studiesFilter, props.typesFilter, job.node) &&
        <JobItem key={job.node.id} job={job.node} partner={job.node.partner}/>)}
  </JobsList>
);


const JobsList = styled.div`
  display: grid;
  @media (min-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
  grid-template-columns: 1fr;
  grid-gap: 1em;
`


export default jobslist;
