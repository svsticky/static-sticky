import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';


const studieFilterOptions = [
  'Informatica',
  'Informatiekunde',
  'Gametechnologie',
  'Artificial Intelligence',
  'Business Informatics',
  'Computing Science',
  'Game and Media Technology',
];

const typeFilterOptions = [
  'Afstudeeropdracht',
  'Bijbaan',
  'Full-time',
  'Part-time',
  'Stage',
  'Traineeship',
];


const JobFilter = props => (
  <JobFilterWrapper>
      <div>
        { props.studiesFilter.length > 0 ?
          <span>{props.studiesFilter.length} studie(s) geselecteerd:</span> :
          <span>Selecteer op studie(s)</span> }
      </div>
      <div
        multiple
        value={props.studiesFilter}
        onChange={e => (props.updateStudiesFilter(e.target.value))}
        input={<div id="select-study" />}
      >
        { studieFilterOptions.map(option => (
          <div
            key={option}
            value={option}
          >
            {option}
          </div>
        ))}
      </div>
      <div htmlFor="select-type" className="input-label">
        { props.typesFilter.length > 0 ?
          <span>{props.typesFilter.length} type(n) geselecteerd:</span> :
          <span>Selecteer op type(n)</span> }
      </div>
      <div
        multiple
        value={props.typesFilter}
        onChange={e => (props.updateTypesFilter(e.target.value))}
        input={<div id="select-type" />}
      >
        { typeFilterOptions.map(option => (
          <div
            key={option}
            value={option}
          >
            {option}
          </div>
        ))}
      </div>
  </JobFilterWrapper>
);

const JobFilterWrapper = styled.div`

`

export default JobFilter;
