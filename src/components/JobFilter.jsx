import React from 'react';
import styled from 'styled-components';
import { Card, Dropdown } from 'semantic-ui-react';


const studieFilterOptions = [
  {key: 1, text: 'Informatica', value: 'Informatica'},
  {key: 2, text: 'Informatiekunde', value: 'Informatica'},
  {key: 3, text: 'Gametechnologie', value: 'Informatica'},
  {key: 4, text: 'Artificial Intelligence', value: 'Artificial Intelligence'},
  {key: 5, text: 'Business Informatics', value: 'Business Informatics'},
  {key: 6, text: 'Computing Science', value: 'Computing Science'},
  {key: 7, text: 'Game and Media Technology', value: 'Game and Media Technology'}
];

const typeFilterOptions = [
  'Afstudeeropdracht',
  'Bijbaan',
  'Full-time',
  'Part-time',
  'Stage',
  'Traineeship',
];
//The problem lies in the first dropdown -> onChange. Somehow it won't allow to filter
const JobFilter = props => (
  <JobFilterWrapper>
      <div>
        { props.studiesFilter.length > 0 ?
          <span>{props.studiesFilter.length} studie(s) geselecteerd:</span> :
          <span>Selecteer op studie(s)</span> }
      </div>
      <Dropdown
          search multiple selection
          options={studieFilterOptions}
          placeholder="Filter op studie"
          onChange= {(e, {value}) => props.updateStudiesFilter(value)}/>

      <div htmlFor="select-type" className="input-label">
        { props.typesFilter.length > 0 ?
          <span>{props.typesFilter.length} type(n) geselecteerd:</span> :
          <span>Selecteer op type(n)</span> }
      </div>
      <div
        value={props.typesFilter}
        input={<div id="select-type" />}
      >
      <Dropdown item text="Selecteer op type" direction="Left" selection
                onChange={e => (props.updateTypesFilter(e.target.value))}>
        <Dropdown.Menu>
        { typeFilterOptions.map(option => (
          <Dropdown.Item
          className="item"
          key={option}
          value ={option}
          > <p className="item-text">{option}</p>
          </Dropdown.Item>
        ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
  </JobFilterWrapper>
);

const JobFilterWrapper = styled.div`

`

export default JobFilter;
