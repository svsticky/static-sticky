import React, { Component } from 'react';
import styled from 'styled-components';
import ActivityCollection from './ActivityCollection';
import Activity from './Activity';

export default class ActivityWidget extends Component {
  constructor(props) {
    super(props);
    this.updateActivities = this.updateActivities.bind(this);
    this.state = {
      activitiesLoaded: false,
      activities: [],
    };
  }

  updateActivities(activities) {
    this.setState({
      activitiesLoaded: true,
      activities: activities,
    });
  }

  render() {
    if (this.state.activities.length === 0 && this.state.activitiesLoaded)
      return <div />;

    return (
      <ActivityIndexWrapper>
        <div>
          <h3>Eerstvolgende Activiteit</h3>
          <ActivityCollection updateActivities={this.updateActivities}>
            {<Activity activity={this.state.activities[0]} />}
          </ActivityCollection>
          <p className="activity-page-link">
            <a href="/vereniging/activiteiten">Meer activiteiten</a>
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
