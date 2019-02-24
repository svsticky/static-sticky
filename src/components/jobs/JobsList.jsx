import React from 'react';
import styled from 'styled-components';
import JobItem from './JobItem';
import { device } from '../../data/Devices';

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

const createJobs = jobs => {
  return jobs.map(job => (
    <JobItem job={job.node} partner={job.node.partner} key={job.node.id} />
  ));
};

const jobslist = props => (
  <JobsListWrapper>
    <div className="flex-container">
      {displayJobs(props.studiesFilter, props.typesFilter, props.jobs)}
    </div>
  </JobsListWrapper>
);

const JobsListWrapper = styled.div`
  display: flex;
  justify-content: center;
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
    @media ${device.desktop} {
      margin: 1rem -4rem;
      justify-content: center;
    }
  }
`;

export default jobslist;
