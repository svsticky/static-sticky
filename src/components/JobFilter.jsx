import React from 'react';
import { Dropdown, Checkbox, Segment } from 'semantic-ui-react';

const studieFilterOptions = [
  'informatica',
  'informatiekunde',
  'gametechnologie',
  'artificial intelligence',
  'business intelligence',
  'computing science',
  'game and media technology',
];

const JobFilter = props => (
  <Segment>
    Filteren op:
    <br />
    <Dropdown text={'Studies (' + props.studiesFilter.length + ')'} icon="student" labeled button className="icon">
      <Dropdown.Menu>
        <Dropdown.Menu scrolling>
          {studieFilterOptions.map(studie => (
            <Dropdown.Item onClick={() => props.toggleStudiesFilter(studie)}>
              <Checkbox checked={props.studiesFilter.includes(studie)} />
              {studie}
            </Dropdown.Item>))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
    <p>Toegepaste studie-filter: <br /> {props.studiesFilter}</p>
    <br />
    <br />
  </Segment>
);

export default JobFilter;

// onClick={() => props.toggleStudiesFilter("Game and Media Technology")}