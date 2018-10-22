import React, { Component } from 'react';
import Axios from 'axios';

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
    const activities = await axios.get('https://koala.svsticky.nl/api/activities');
    this.setState({
      loading: false,
      activities
    });
    console.log(activities);
  }

  render() {
    return(
      <div>
        { this.state.loading ? <p>Loading activities...</p> : <p>Activities loaded!</p> }
        ActivitiesWidget</div>
    )
  }
}