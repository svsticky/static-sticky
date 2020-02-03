import React, { Component } from 'react';
import ActivityCollection from './ActivityCollection';
import Activity from './Activity';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react';
import { getTranslation } from '../../data/i18n';

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

    const language =
      typeof window !== 'undefined' ? window.location.href.split('/')[3] : 'nl';

    return (
      <>
        <h2>{getTranslation(language, 'activities.next')}</h2>
        <ActivityCollection updateActivities={this.updateActivities}>
          {<Activity activity={this.state.activities[0]} />}
        </ActivityCollection>
        <Button
          fluid
          primary
          as={Link}
          to={`/${language}/vereniging/activiteiten`}
          style={{ marginTop: '1rem' }}
        >
          {getTranslation(language, 'activities.more')}
        </Button>
      </>
    );
  }
}
