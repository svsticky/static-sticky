import React from 'react';
import { Segment } from 'semantic-ui-react';
import Job from './Job';

const displayJob = (studiesFilter, job) => {
  if (studiesFilter.length === 0 || job.target_studies.some(r => studiesFilter.indexOf(r) >= 0)) {
    return true;
  }
  return false;
};

const JobsList = props => (
  <Segment>
    {props.data.map(job =>
      displayJob(props.studiesFilter, job.node) &&
        <Job key={job.node.id} job={job.node} />)}
  </Segment>
);

export default JobsList;
