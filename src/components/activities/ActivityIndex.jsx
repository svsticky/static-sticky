import React, { Component } from 'react';
import styled from 'styled-components';
import ActivityCollection from './ActivityCollection';

export default class ActivityIndex extends Component {
  render() {
    return (
      <ActivityIndexWrapper>
        <div>
          <h3>Eerstvolgende Activiteit</h3>
          <ActivityCollection count="0" />
          <p className="more">
            <a href="/vereniging/activiteiten">Meer activiteiten</a>
          </p>
        </div>
      </ActivityIndexWrapper>
    );
  }
}

const ActivityIndexWrapper = styled.div`
  @media (min-width: 990px) {
    width: 80%;
  }
  .more {
    margin-top: 0.5em;
  }
`;
