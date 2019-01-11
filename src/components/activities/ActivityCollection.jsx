import React, { Component } from 'react';

export default class ActivityCollection extends Component {
  state = {
    loading: true,
    error: '',
  };

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

    this.props.updateActivities(
      activitiesJSON.filter(activity => activity.show_on_website)
    );
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
