import React from 'react';
import styled from 'styled-components';
import { FormControl, Select, Input, MenuItem, InputLabel } from '@material-ui/core';
import Card from '../atoms/Card';
import globals from '../styles/globals.json';


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
  <FilterWrapper>
    <FormControl>
      <InputLabel htmlFor="select-study" className="input-label">
        { props.studiesFilter.length > 0 ?
          <span>{props.studiesFilter.length} studie(s) geselecteerd:</span> :
          <span>Selecteer op studie(s)</span> }
      </InputLabel>
      <Select
        multiple
        value={props.studiesFilter}
        onChange={e => (props.updateStudiesFilter(e.target.value))}
        input={<Input id="select-study" />}
      >
        { studieFilterOptions.map(option => (
          <MenuItem
            key={option}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    <FormControl>
      <InputLabel htmlFor="select-type" className="input-label">
        { props.typesFilter.length > 0 ?
          <span>{props.typesFilter.length} type(n) geselecteerd:</span> :
          <span>Selecteer op type(n)</span> }
      </InputLabel>
      <Select
        multiple
        value={props.typesFilter}
        onChange={e => (props.updateTypesFilter(e.target.value))}
        input={<Input id="select-type" />}
      >
        { typeFilterOptions.map(option => (
          <MenuItem
            key={option}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </FilterWrapper>
);

const FilterWrapper = styled(Card)`
  margin-bottom: 1em;
  padding: 1em;
  z-index: 10;
  position: sticky;
  top: 4.2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  .input-label {
    color: rgb(${globals.boardColor});
  }
`;


export default JobFilter;
