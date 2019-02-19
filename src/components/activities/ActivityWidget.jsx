import React, { Component } from 'react';
import styled from 'styled-components';
import ActivityCollection from './ActivityCollection';
import Activity from './Activity';
import { Link } from 'gatsby';

export default class ActivityWidget extends Component {
  state = {
    activitiesLoaded: false,
    activities: [],
  };

  updateActivities = activities => {
    this.setState({
      activitiesLoaded: true,
      activities: activities,
    });
  };

  render() {
    if (this.state.activities.length === 0 && this.state.activitiesLoaded)
      return <div />;

    return (
      <ActivityIndexWrapper>
        <div>
          <h2>Eerstvolgende Activiteit</h2>
          <ActivityCollection updateActivities={this.updateActivities}>
            {<Activity activity={this.state.activities[0]} />}
          </ActivityCollection>
          <p className="activity-page-link">
            <Link to="/vereniging/activiteiten">Meer activiteiten</Link>
          </p>
        </div>
      </ActivityIndexWrapper>
    );
  }
}

const ActivityIndexWrapper = styled.div`
  .activity-page-link {
    margin-top: 0.5em;
  }
`;
