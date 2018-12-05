import React, { Component } from 'react';

export default class ActivityCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const activities = await fetch('https://koala.svsticky.nl/api/activities');
    const activitiesJSON = await activities.json();
    this.props.updateActivities(activitiesJSON);
    this.setState({
      loading: false,
    });
  }

  render() {
    if (this.state.loading) return <p>Loading activities...</p>;
    else return this.props.children;
  }
}
