import React from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';
import { Grid } from 'semantic-ui-react';

const displayJobs = (studiesFilter, typesFilter, jobs) => {
  if (studiesFilter.length === 0 && typesFilter.length === 0) {
    return createJobs(jobs);
  } else if (studiesFilter.length > 0 && typesFilter.length === 0) {
    const jobStudieFilter = jobs.filter(job =>
      job.node.target_studies.some(studie => studiesFilter.indexOf(studie) >= 0)
    );
    return createJobs(jobStudieFilter);
  } else if (typesFilter.length > 0 && studiesFilter.length === 0) {
    const jobTypeFilter = jobs.filter(job =>
      job.node.type.some(type => typesFilter.indexOf(type) >= 0)
    );
    return createJobs(jobTypeFilter);
  } else if (studiesFilter.length > 0 && typesFilter.length > 0) {
    const jobSuperFilter = jobs.filter(
      job =>
        job.node.target_studies.some(
          studie => studiesFilter.indexOf(studie) >= 0
        ) && job.node.type.some(type => typesFilter.indexOf(type) >= 0)
    );
    return createJobs(jobSuperFilter);
  }
};

const createJobs = jobbies => {
  return jobbies.map(job => (
    <Grid.Column>
      <JobItem key={job.node.id} job={job.node} partner={job.node.partner} />
    </Grid.Column>
  ));
};

const jobslist = props => (
  <JobsList>
    <div className="container">
      <Grid doubling stretched columns={3}>
        {displayJobs(props.studiesFilter, props.typesFilter, props.jobs)}
      </Grid>
    </div>
  </JobsList>
);

const JobsList = styled.div`
  .container {
    grid-gap: 20px;
    padding: 20px;
  }
`;

export default jobslist;
