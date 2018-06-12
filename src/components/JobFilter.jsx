import React from 'react';
import styled from 'styled-components';
import { FormControl, Select, Input, MenuItem, InputLabel } from '@material-ui/core';
import Card from '../atoms/Card';


const studieFilterOptions = [
  'Informatica',
  'Informatiekunde',
  'Gametechnologie',
  'Artificial Intelligence',
  'Business Informatics',
  'Computing Science',
  'Game and Media Technology',
];

// const typeFilterOptions = [
//   'Afstudeeropdracht',
//   'Bijbaan',
//   'Full-time',
//   'Part-time',
//   'Stage',
//   'Traineeship',
// ];


class JobFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudies: [],
    };
  }


  updateSelectedStudies(e) {
    this.setState({ selectedStudies: e.target.value });
  }

  render() {
    return (
      <FilterWrapper>
        <FormControl>
          <InputLabel htmlFor="select-multiple">Studie(s)</InputLabel>
          <Select
            className="select-studies"
            multiple
            value={this.state.selectedStudies}
            onChange={e => this.updateSelectedStudies(e)}
            input={<Input id="select-multiple" />}
          >
            {studieFilterOptions.map(option => (
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
  }
}


const FilterWrapper = styled(Card)`
  margin-bottom: 1em;
  position: sticky;
  top: 4.2em;
  .select-studies {
    width: 100%;
    display: flex;
  }
`;


export default JobFilter;
