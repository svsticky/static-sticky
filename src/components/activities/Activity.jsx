import React from 'react'
import styled from 'styled-components'
import { Button, Card } from 'semantic-ui-react'


const renderInfo = (poster, props) => {
  const classes = poster ? "flip-card-back" : "no-poster";
  const {id, location, name, price} = props.activity;
  return(
    <Card fluid className={classes + " info"}>
      <div className='content'>
        <h3>{name}</h3>
        { location ? <p><strong>Locatie: </strong><em>{location}</em></p> : null }
        <p><strong>Prijs: </strong><em>{ price !== 0 ? ("€" + price + "0") : "Gratis!" }</em></p>
      </div>
      <Button 
        href={"https://koala.svsticky.nl/activities/" + id} 
        target="_blank">
          <p>
            Inschrijven  <i className="item-text icon external" />
          </p>
      </Button>
    </Card>
  )
}

const Activity = props => {
  const { name, poster } = props.activity;
  return (
    <ActivityWrapper>
      { poster ? 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={poster} alt={"Poster voor " + name} />
          </div>
          { renderInfo(poster, props) }
        </div>
      </div>
      :
      renderInfo(poster, props)
      }
    </ActivityWrapper>
  )
}

const ActivityWrapper = styled.div`
  .flip-card {
    perspective: 1000px;
    height: 100%;
    .flip-card-inner {
      position: relative;
      transition: transform 0.3s;
      transform-style: preserve-3d;
      height: 100%;
      .flip-card-front {
        img {
          height: 100%;
          border-radius: 5px;
          border: 1px solid #ddd;
          max-width:100%;
        }
      }
    }
    &:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  }
  .flip-card-front, .flip-card-back {
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .flip-card-back {
    border-radius: 5px;
    transform: rotateY(180deg);
  }
  .no-poster {
    height: 100%;
  }
  .info {
    margin: 0 !important;
    display: flex !important;
    flex-direction: column;
    .content {
      flex: 1;
      padding: 1em !important;
      h3 {
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.5em;
      }
    }
  }
  .icon {
    margin-left: 0.4em;
  }
`

export default Activity;
