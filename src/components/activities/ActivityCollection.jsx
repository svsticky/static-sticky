import React, { Component } from 'react';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

export default class ActivityCollection extends Component {
  state = {
    loading: true,
    error: '',
  };

  async componentDidMount() {
    let activitiesJSON;
    const apiUrl =
      process.env.GATSBY_TAVERN_API_URL ||
      process.env.GATSBY_KOALA_API_URL ||
      'http://localhost:8080/activities';

    try {
      const activities = await fetch(apiUrl);
      activitiesJSON = await activities.json();
    } catch (e) {
      this.setState({
        loading: false,
        error: e.message,
      });
      return;
    }

    const baseUrl = apiUrl.replace(/\/activities\/?$/i, '');

    const filtered = (Array.isArray(activitiesJSON) ? activitiesJSON : [])
      .filter(activity => {
        if (activity.showOnWebsite !== undefined)
          return Boolean(activity.showOnWebsite);
        if (activity.show_on_website !== undefined)
          return Boolean(activity.show_on_website);
        return true;
      })
      .map(activity => {
        const id = activity.id;
        const posterUrl =
          activity.thumbnail ||
          activity.poster ||
          (activity.posterPath || activity.posterFileName
            ? `${baseUrl}/activities/${id}/poster`
            : '');

        return {
          ...activity,
          show_on_website:
            activity.show_on_website !== undefined
              ? activity.show_on_website
              : activity.showOnWebsite,
          description_nl:
            activity.description_nl || activity.dutchDescription || '',
          description_en:
            activity.description_en || activity.englishDescription || '',
          thumbnail: posterUrl,
          poster: posterUrl,
        };
      });

    this.props.updateActivities(filtered);
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
