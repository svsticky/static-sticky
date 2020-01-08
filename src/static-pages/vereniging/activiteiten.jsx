import React, { Component } from 'react';
import { graphql } from 'gatsby';
import ActivityCollection from '$/components/activities/ActivityCollection';
import Markdown from 'markdown-to-jsx';
import Activity from '$/components/activities/Activity';
import { Grid } from 'semantic-ui-react';
import Layout from '../../components/layout/Layout';
import { getTranslation } from '../../data/i18n';

export default class Activities extends Component {
  state = {
    activities: [],
  };

  updateActivities = activities => {
    this.setState({
      activities: activities,
    });
  };

  render() {
    console.log('test');
    const page = this.props.data.contentfulPage;
    const language = window.location.href.split('/')[3];
    const title = getTranslation(language, 'activities.title');
    return (
      <Layout title={title}>
        <h2>{title}</h2>
        <Markdown>{page.content.content}</Markdown>
        <ActivityCollection updateActivities={this.updateActivities}>
          {this.state.activities.length === 0 ? (
            <p>{getTranslation(language, 'activities.none')}</p>
          ) : (
            <Grid doubling stackable columns={4} centered>
              {this.state.activities.map(activity => {
                return (
                  <Grid.Column key={activity.id}>
                    <Activity activity={activity} />
                  </Grid.Column>
                );
              })}
            </Grid>
          )}
        </ActivityCollection>
      </Layout>
    );
  }
}

export const ActivitiesQuery = graphql`
  query ActivitiesQuery {
    contentfulPage(slug: { eq: "activiteiten" }) {
      title
      content {
        content
      }
    }
  }
`;
