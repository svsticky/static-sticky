import React from 'react'
import styled from 'styled-components'
import { Dropdown } from 'semantic-ui-react'

const studieFilterOptions = [
  { key: 1, text: 'Informatica', value: 'Informatica' },
  { key: 2, text: 'Informatiekunde', value: 'Informatiekunde' },
  { key: 3, text: 'Gametechnologie', value: 'Gametechnologie' },
  { key: 4, text: 'Artificial Intelligence', value: 'Artificial Intelligence' },
  { key: 5, text: 'Business Informatics', value: 'Business Informatics' },
  { key: 6, text: 'Computing Science', value: 'Computing Science' },
  {
    key: 7,
    text: 'Game and Media Technology',
    value: 'Game and Media Technology',
  },
]

const typeFilterOptions = [
  { key: 1, text: 'Afstudeeropdracht', value: 'Afstudeeropdracht' },
  { key: 2, text: 'Bijbaan', value: 'Bijbaan' },
  { key: 3, text: 'Full-time', value: 'Full-time' },
  { key: 4, text: 'Part-time', value: 'Part-time' },
  { key: 5, text: 'Stage', value: 'Stage' },
  { key: 6, text: 'Traineeship', value: 'Traineeship' },
]

//The problem lies in the first dropdown -> onChange. Somehow it won't allow to filter
const JobFilter = props => (
  <JobFilterWrapper>
    <div className="container">
      <div className="text1">
        {props.studiesFilter.length > 0 ? (
          <span>{props.studiesFilter.length} studie(s) geselecteerd:</span>
        ) : (
          <span>Selecteer op studie(s)</span>
        )}
      </div>
      <div className="text2">
        {props.typesFilter.length > 0 ? (
          <span>{props.typesFilter.length} type(n) geselecteerd:</span>
        ) : (
          <span>Selecteer op type(n)</span>
        )}
      </div>
      <div className="filter1">
        <Dropdown
          fluid
          search
          multiple
          selection
          options={studieFilterOptions}
          placeholder="Filter op studie"
          onChange={(e, data) => {
            props.updateStudiesFilter(data.value)
          }}
        />
      </div>
      <div className="filter2">
        <Dropdown
          fluid
          search
          multiple
          selection
          options={typeFilterOptions}
          placeholder="Filter op type"
          onChange={(e, data) => {
            props.updateTypesFilter(data.value)
          }}
        />
      </div>
    </div>
  </JobFilterWrapper>
)

const JobFilterWrapper = styled.div`
&&&
  .container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20% 70%;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    padding: 5px;
    grid-auto-flow: row;
    align-content: center;

  }
  .text1{
    grid-column: 1;
    grid-row: 1
  }
  .text2{
    grid-column: 2;
    grid-row: 1;
  }
  .filter1{
    grid-column: 1;
    grid-row: 2;
  }
  .filter2{
    grid-column 2;
    grid-row: 2;
  }
`

export default JobFilter
