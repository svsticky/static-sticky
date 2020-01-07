import React, { Component } from 'react';
import ActivityCollection from './ActivityCollection';
import Activity from './Activity';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

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

    const language = window.location.href.split('/')[3];

    return (
      <>
        <h2>Eerstvolgende Activiteit</h2>
        <ActivityCollection updateActivities={this.updateActivities}>
          {<Activity activity={this.state.activities[0]} />}
        </ActivityCollection>
        <Button
          fluid
          primary
          as={Link}
          to={`${language}/vereniging/activiteiten`}
          style={{ marginTop: '1rem' }}
        >
          Meer activiteiten
        </Button>
      </>
    );
  }
}
