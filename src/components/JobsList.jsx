import React from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';


const displayJobs = (studiesFilter, typesFilter, jobs) => {

  if (studiesFilter.length === 0 && typesFilter.length === 0) {
    return (jobs.map(job =>
    <JobItem key={job.node.id} job={job.node} partner={job.node.partner} />))
  }
  const jobSuperFilter = jobs.filter(job =>
    job.node.target_studies.some(studie => studiesFilter.indexOf(studie) >= 0) ||
    job.node.type.some(type => typesFilter.indexOf(type) >= 0));

  if (studiesFilter.length > 0 || typesFilter.length > 0 && jobSuperFilter.length > 0) {
    return (jobSuperFilter.map(job =>
      <JobItem fluid key={job.node.id} job={job.node} partner={job.node.partner} />));
    }
  return false;
};


const jobslist = props => (
  <JobsList>
    <div className='container'>
    {displayJobs(props.studiesFilter, props.typesFilter, props.jobs)}
    </div>
  </JobsList>
);


const JobsList = styled.div`
   &&&
  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-evenly;
  }
  .item{
    display: flex;
    align-self: stretch;
  }
`;


export default jobslist;
