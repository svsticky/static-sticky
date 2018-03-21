import React from 'react';
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

const jobfilter = props => (
  <div>
    jobfilter
    {/* <Card fluid>
      <Card.Content>
        <Dropdown compact text={'Studies (' + props.studiesFilter.length + ')'} icon="student" labeled button className="icon" scrolling={false}>
          <Dropdown.Menu>
            <Dropdown.Menu scrolling>
              {studieFilterOptions.map(study => (
                <Dropdown.Item key={study} onClick={() => props.toggleStudiesFilter(study)}>
                  <Checkbox checked={props.studiesFilter.includes(study)} />
                  <span>{study}</span>
                </Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown compact text={'Typen (' + props.typesFilter.length + ')'} icon="tags" labeled button className="icon">
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
      </Card.Content>
    </Card> */}
  </div>
);

const FilterContainer = styled.div`
  @media (min-width: 768px) {
    top: '3.5em';
  }
  @media screen and (max-width: 768px) {
    top: '0',
  }
  position: 'sticky';
  z-index: '10';
  margin-bottom: '1em';
`

export default jobfilter;
