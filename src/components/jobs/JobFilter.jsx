import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import { device } from '../../data/Devices';

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
];

const typeFilterOptions = [
  {
    key: 1,
    text: 'Afstudeeropdracht',
    value: 'Afstudeeropdracht',
    label: { color: 'yellow', icon: 'student' },
  },
  {
    key: 2,
    text: 'Bijbaan',
    value: 'Bijbaan',
    label: { color: 'blue', icon: 'briefcase' },
  },
  {
    key: 3,
    text: 'Full-time',
    value: 'Full-time',
    label: { color: 'blue', icon: 'briefcase' },
  },
  {
    key: 4,
    text: 'Part-time',
    value: 'Part-time',
    label: { color: 'blue', icon: 'briefcase' },
  },
  {
    key: 5,
    text: 'Stage',
    value: 'Stage',
    label: { color: 'yellow', icon: 'student' },
  },
  {
    key: 6,
    text: 'Traineeship',
    value: 'Traineeship',
    label: { color: 'blue', icon: 'briefcase' },
  },
];

//The problem lies in the first dropdown -> onChange. Somehow it won't allow to filter
const JobFilter = props => (
  <JobFilterWrapper>
    <div className="filter-one">
      <div className="filter-label">
        {props.studiesFilter.length > 0 ? (
          <span>{props.studiesFilter.length} studie(s) geselecteerd:</span>
        ) : (
          <span>Selecteer op studie(s)</span>
        )}
      </div>
      <Dropdown
        clearable
        fluid
        multiple
        selection
        options={studieFilterOptions}
        placeholder="Filter op studie"
        onChange={(e, data) => {
          props.updateStudiesFilter(data.value);
        }}
      />
    </div>
    <div className="filter-two">
      <div className="filter-label">
        {props.typesFilter.length > 0 ? (
          <span>{props.typesFilter.length} type(n) geselecteerd:</span>
        ) : (
          <span>Selecteer op type(n)</span>
        )}
      </div>
      <Dropdown
        clearable
        fluid
        multiple
        selection
        options={typeFilterOptions}
        placeholder="Filter op type"
        onChange={(e, data) => {
          props.updateTypesFilter(data.value);
        }}
      />
    </div>
  </JobFilterWrapper>
);

const JobFilterWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: stretch;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
    .filter {
      &-one {
        flex: 1;
        margin: 0 1rem 0 0;
      }
      &-two {
        flex: 1;
      }
      &-label {
        margin-bottom: 0.3rem;
      }
    }
    i {
      margin: 0;
      width: 1rem;
    }
    @media ${device.mobileMax} {
      flex-direction: column;
      .filter-one {
        margin: 0 0 1rem 0;
      }
    }
  }
`;

export default JobFilter;
