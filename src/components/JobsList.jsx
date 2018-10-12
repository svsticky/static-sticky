import React from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';


const displayJobs = (studiesFilter, typesFilter, jobs) => {

  if (studiesFilter.length === 0 && typesFilter.length === 0) {
    return(createJobs(jobs));
  }

  else if(studiesFilter.length > 0 && typesFilter.length === 0){
    const jobStudieFilter = jobs.filter(job =>
      job.node.target_studies.some(studie => studiesFilter.indexOf(studie) >= 0));
      return (createJobs(jobStudieFilter));
  }

  else if(typesFilter.length > 0 && studiesFilter.length === 0){
     const jobTypeFilter = jobs.filter(job =>
       job.node.type.some(type => typesFilter.indexOf(type) >= 0));
      return(createJobs(jobTypeFilter));
  }

  else if(studiesFilter.length > 0 && typesFilter.length > 0){
      const jobSuperFilter = jobs.filter(job =>
        job.node.target_studies.some(studie => studiesFilter.indexOf(studie) >= 0) &&
        job.node.type.some(type => typesFilter.indexOf(type) >= 0));
        return(createJobs(jobSuperFilter));
  }
}

const createJobs = (jobbies) => {
  return(jobbies.map(job =>
  <JobItem className='item' key={job.node.id} job={job.node} partner={job.node.partner} />));
}


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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 20px;
    grid-auto-flow: row;
  }
`;


export default jobslist;
