import React from 'react';
import { Dropdown, Checkbox, Segment } from 'semantic-ui-react';

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
  <Segment>
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
  </Segment>
);

export default JobFilter;

// onClick={() => props.toggleStudiesFilter("Game and Media Technology")}