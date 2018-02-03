import React from 'react';
import Job from './Job';

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

const JobsList = props => (
  <div>
    {props.data.map(job =>
      displayJob(props.studiesFilter, props.typesFilter, job.node) &&
        <Job key={job.node.id} job={job.node} />)}
  </div>
);

export default JobsList;
