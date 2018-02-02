import React from 'react';
import Job from './Job';

const displayJob = (studiesFilter, job) => {
  if (studiesFilter.length === 0 || job.target_studies.some(r => studiesFilter.indexOf(r) >= 0)) {
    return <Job job={job} />;
  }
  return null;
};

const JobsList = props => (
  <div>
    {props.data.map(job => displayJob(props.studiesFilter, job.node))}
  </div>
);

export default JobsList;
