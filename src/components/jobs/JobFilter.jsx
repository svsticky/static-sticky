import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Dropdown } from 'semantic-ui-react';
import { device } from '../../data/Devices';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';
const studieFilterOptions = props =>{
  const language = 
    typeof window !== 'undefined'
    ? getLanguage(window)
    : metadata.defaultLocale;
  const options = props.data.allContentfulStudies.nodes.filter(
    content => content.node_locale === language
  );
  let lg = [];
  for(let i = 0; i < options.length; i++){
    lg.push({
      key: options[i].order,
      text: options[i].Name,
      value: options[i].Name,
    });
  }
  return lg;
}

const typeFilterOptions = lg => [
  {
    key: 1,
    text: getTranslation(lg, 'vacancy.filter.grad'),
    value: 'Afstudeeropdracht',
    label: { color: 'yellow', icon: 'student' },
  },
  {
    key: 2,
    text: getTranslation(lg, 'vacancy.filter.side'),
    value: 'Bijbaan',
    label: { color: 'blue', icon: 'briefcase' },
  },
  {
    key: 3,
    text: getTranslation(lg, 'vacancy.filter.full'),
    value: 'Full-time',
    label: { color: 'blue', icon: 'briefcase' },
  },
  {
    key: 4,
    text: getTranslation(lg, 'vacancy.filter.part'),
    value: 'Part-time',
    label: { color: 'blue', icon: 'briefcase' },
  },
  {
    key: 5,
    text: getTranslation(lg, 'vacancy.filter.intern'),
    value: 'Stage',
    label: { color: 'yellow', icon: 'student' },
  },
  {
    key: 6,
    text: getTranslation(lg, 'vacancy.filter.trainee'),
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
          <span>
            {getTranslation(props.locale, 'vacancy.chosen.study', [
              props.studiesFilter.length,
            ])}
          </span>
        ) : (
          <span>{getTranslation(props.locale, 'vacancy.choose.study')}</span>
        )}
      </div>
      <Dropdown
        clearable
        fluid
        multiple
        selection
        options={studieFilterOptions(props)}
        placeholder={getTranslation(props.locale, 'vacancy.choose.study')}
        onChange={(e, data) => {
          props.updateStudiesFilter(data.value);
        }}
      />
    </div>
    <div className="filter-two">
      <div className="filter-label">
        {props.typesFilter.length > 0 ? (
          <span>
            {getTranslation(props.locale, 'vacancy.chosen.type', [
              props.typesFilter.length,
            ])}
          </span>
        ) : (
          <span>{getTranslation(props.locale, 'vacancy.choose.type')}</span>
        )}
      </div>
      <Dropdown
        clearable
        fluid
        multiple
        selection
        options={typeFilterOptions(props.locale)}
        placeholder={getTranslation(props.locale, 'vacancy.choose.type')}
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

const studiesQuery = graphql`
  query studiesQuery{
    allContentfulStudies(sort: { fields: [order]}) {
      nodes {
        Name
        order
        node_locale
      }
    }
  }
`;

export default props =>(
  <StaticQuery
    query ={studiesQuery}
    render = {data => <JobFilter data={data} {...props} />}
  />
);
