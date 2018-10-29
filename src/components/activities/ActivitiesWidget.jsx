import React, { Component } from 'react';
import styled from 'styled-components';
import Activity from '../Activity';

export default class ActivitiesWidget extends Component {
  constructor() {
    super();
    this.state = { 
      loading: true,
      activities: []
    }
  }
  state = {
    fetchedActivities: ['No activities']
  }

  async componentDidMount() {
    const activities = await fetch('https://koala.svsticky.nl/api/activities');
    const activitiesJSON = await activities.json();
    this.setState({
      loading: false,
      activities: activitiesJSON
    });
    console.log(activitiesJSON);
  }

  renderActivities = (activities) => {
    return(
      activities.map(activity => <Activity activity={activity} key={activity.name}/>)
    )
  }

  render() {
    return(
      <ActivitiesWidgetWrapper>
        { this.state.loading ? <p>Loading activities...</p> : this.renderActivities(this.state.activities) }
      </ActivitiesWidgetWrapper>
    )
  }
}

const ActivitiesWidgetWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5em;
`;