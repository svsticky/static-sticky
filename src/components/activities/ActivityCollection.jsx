import React, { Component } from 'react';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

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
    const language =
      typeof window !== 'undefined'
        ? getLanguage(window)
        : metadata.defaultLocale;
    if (this.state.loading)
      return <p>{getTranslation(language, 'activities.loading')}</p>;
    else if (this.state.error) return <p>{this.state.error}</p>;
    else return this.props.children;
  }
}
