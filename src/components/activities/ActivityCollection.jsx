import React, { Component } from 'react';
import styled from 'styled-components';
import Activity from './Activity';

export default class ActivityCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activities: [],
    };
  }

  async componentDidMount() {
    const activities = await fetch('https://koala.svsticky.nl/api/activities');
    const activitiesJSON = await activities.json();
    this.setState({
      loading: false,
      activities: activitiesJSON,
    });
  }

  renderActivities = activities => {
    return filterActivities(activities, this.props.count);
  };

  render() {
    return (
      <ActivityCollectionWrapper count={this.props.count}>
        {this.state.loading ? (
          <p>Loading activities...</p>
        ) : this.state.activities.length === 0 ? (
          <p>No activities</p>
        ) : (
          this.renderActivities(this.state.activities)
        )}
      </ActivityCollectionWrapper>
    );
  }
}

const filterActivities = (activities, count) => {
  if (count === 'all') {
    return activities.map(activity => (
      <Activity activity={activity} key={activity.name} />
    ));
  } else {
    const filtered = activities.filter(
      activity => activities.indexOf(activity) <= parseInt(count, 10)
    );

    return filtered.map(activity => (
      <Activity activity={activity} key={activity.name} />
    ));
  }
};

const ActivityCollectionWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  @media (min-width: 990px) {
    grid-template-columns: ${props =>
      props.count === '0' ? '1fr' : 'repeat(4, 1fr)'};
  }
  @media (max-width: 990px) {
    grid-template-columns: ${props =>
      props.count === '0' ? '1fr' : 'repeat(3, 1fr)'};
  }
  @media (max-width: 680px) {
    grid-template-columns: ${props =>
      props.count === '0' ? '1fr' : 'repeat(2, 1fr)'};
  }
  grid-auto-rows: 26em;
  grid-gap: 2.5em;
`;
