import React, { Component } from 'react'
import styled from 'styled-components'
import Activity from './Activity'

export default class ActivityCollection extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      activities: [],
    }
  }
  state = {
    fetchedActivities: ['No activities'],
  }

  async componentDidMount() {
    const activities = await fetch('https://koala.svsticky.nl/api/activities')
    const activitiesJSON = await activities.json()
    this.setState({
      loading: false,
      activities: activitiesJSON,
    })
    console.log(activitiesJSON)
  }

  renderActivities = activities => {
    return activities.map(activity => (
      <Activity activity={activity} key={activity.name} />
    ))
  }

  render() {
    return (
      <ActivityCollectionWrapper>
        {this.state.loading ? (
          <p>Loading activities...</p>
        ) : (
          this.renderActivities(this.state.activities)
        )}
      </ActivityCollectionWrapper>
    )
  }
}

const ActivityCollectionWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  @media (min-width: 990px){
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 990px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 680px){
    grid-template-columns: repeat(2, 1fr);
  }
  grid-auto-rows: 26em;
  grid-gap: 2.5em;
`
