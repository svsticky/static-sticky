import React, { Component } from 'react'
import styled from 'styled-components'
import Activity from './Activity'

export default class ActivityWidget extends Component {
  constructor(){
    super()
    this.state = {
      loading: true,
      activities : [],
    }
  }
  state = {
    fetchedActivities: ['no activities'],
  }

  async componentDidMount() {
    const activities = await fetch('https://koala.svsticky.nl/api/activities')
    const activitiesJSON = await activities.json()
    this.setState({
      loading: false,
      activities: activitiesJSON,
    })
  }

  renderUpcomingActivity = activities => {
    return <Activity activity={activities[0]} key={activities[0].name} />
  }

  render() {
    return(
      <ActivityWidgetWrapper>
        <div>
          <h3>Opkomende Activiteit</h3>
          <div className="activity">
            {this.state.loading ? (
              <p>Loading activities...</p>
            ) : (
              this.renderUpcomingActivity(this.state.activities)
            )}
          </div>
          <p className="more"><a href="/vereniging/activiteiten">Meer activiteiten</a></p>
        </div>
      </ActivityWidgetWrapper>
    )
  }
}

const ActivityWidgetWrapper = styled.div`
  .activity{
    display: grid;
    grid-auto-rows: 26em;
  }
  .more {
    margin-top: 0.5em;
  }
`
