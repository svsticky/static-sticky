import React from 'react'
import styled from 'styled-components'
import { Button, Image, Reveal } from 'semantic-ui-react'

const Activity = props => {
  const { name, poster, id } = props.activity
  return (
    <ActivityWrapper>
      <div>
        <Reveal animated="move" instant>
          <Reveal.Content visible className="poster">
            <Image size="medium" src={poster} className="poster-image" />
          </Reveal.Content>
          <Reveal.Content hidden className="summary">
            <div className="summary-info">
              <h4>{name}</h4>
            </div>
            <Button
              fluid
              href={"https://koala.svsticky.nl/activities/" + id}
              className="summary-button"
              target="_blank"
            >
              Inschrijven
            </Button>
          </Reveal.Content>
        </Reveal>
      </div>
    </ActivityWrapper>
  )
}

const ActivityWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  div {
    height: 100%;
  }
  .poster {
    height: 100%;
    .poster-image {
      border-radius: 5px;
      height: 100%;
    }
  }
  .summary {
    height: 100%;
    display: flex !important;
    flex-direction: column;
    border: none;
    .summary-info {
      padding: 5px;
      flex-grow: 1;
      h4 {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`

export default Activity
