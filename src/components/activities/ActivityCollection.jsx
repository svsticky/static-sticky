import React, { Component } from 'react';

export default class ActivityCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: '',
    };
  }

  async componentDidMount() {
    let activitiesJSON;
    try {
      const activities = await fetch(
        'https://koala.svsticky.nl/api/activities'
      );
      activitiesJSON = await activities.json();
    } catch (e) {
      this.setState({
        loading: false,
        error: e.message,
      });
      return;
    }

    this.props.updateActivities(activitiesJSON);
    this.setState({
      loading: false,
    });
  }

  render() {
    if (this.state.loading) return <p>Loading activities...</p>;
    else if (this.state.error) return <p>{this.state.error}</p>;
    else return this.props.children;
  }
}
