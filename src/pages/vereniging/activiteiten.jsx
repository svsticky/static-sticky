import React, { Component } from 'react';
import { graphql } from 'gatsby';
import ActivityCollection from '$/components/activities/ActivityCollection';
import ContentfulPage from '$/components/layout/ContentfulPage';
import Markdown from 'markdown-to-jsx';
import Activity from '$/components/activities/Activity';
import { Grid } from 'semantic-ui-react';

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
    const page = this.props.data.contentfulPage;
    return (
      <ContentfulPage page={page}>
        <Markdown>{page.content.content}</Markdown>
        <ActivityCollection updateActivities={this.updateActivities}>
          {this.state.activities.length === 0 ? (
            <p>No activities</p>
          ) : (
            <Grid doubling columns={4} centered>
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
      </ContentfulPage>
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
