import React from 'react';
import { Dropdown, Checkbox, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

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
  <Filter>
    <Dropdown text={'Studies (' + props.studiesFilter.length + ')'} icon="student" labeled button className="icon">
      <Dropdown.Menu>
        <Dropdown.Menu scrolling>
          {studieFilterOptions.map(study => (
            <Dropdown.Item key={study} onClick={() => props.toggleStudiesFilter(study)}>
              <Checkbox checked={props.studiesFilter.includes(study)} />
              <span> {study}</span>
            </Dropdown.Item>))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text={'Typen (' + props.typesFilter.length + ')'} icon="tags" labeled button className="icon">
      <Dropdown.Menu>
        <Dropdown.Menu scrolling>
          {typeFilterOptions.map(type => (
            <Dropdown.Item key={type} onClick={() => props.toggleTypesFilter(type)}>
              <Checkbox checked={props.typesFilter.includes(type)} />
              <span> {type}</span>
            </Dropdown.Item>))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  </Filter>
);

export default JobFilter;

const Filter = styled(Segment)`
  &&& {
    position: -webkit-sticky;
    position: sticky;
    top: 3.9em;
    z-index: 5;
  }
`;
