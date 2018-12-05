import React from 'react';
import styled from 'styled-components';
import { Button, Card, Image } from 'semantic-ui-react';
import ReactCardFlip from 'react-card-flip';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { poster, name } = this.props.activity;
    return (
      <ActivityWrapper
        onMouseEnter={this.flipCard}
        onMouseLeave={this.flipCard}
        onTouchEnd={this.flipCard}
      >
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front">{renderPoster(poster, name)}</div>
          <div key="back">{renderInfo(this.props)}</div>
        </ReactCardFlip>
        {/* Render the image again for sizing (position: absolute on the ReactCardFlip removes it from the document flow)
            Also see: https://github.com/AaronCCWong/react-card-flip/issues/10
            and https://stackoverflow.com/a/46281339*/}
        <Hidden>{renderPoster(poster, name)}</Hidden>
      </ActivityWrapper>
    );
  }
}

const renderPoster = (posterUrl, activityName) => (
  <Image size="medium" src={posterUrl} alt={'Poster voor ' + activityName} />
);

const renderInfo = props => {
  const { id, location, name, price } = props.activity;
  return (
    <Card fluid className={'info'}>
      <div className="content">
        <h3>{name}</h3>
        {location ? (
          <p>
            <strong>Locatie: </strong>
            <em>{location}</em>
          </p>
        ) : null}
        <p>
          <strong>Prijs: </strong>
          <em>
            {price !== 0
              ? '€' + (price.split('.')[1].length === 2 ? price : price + '0')
              : 'Gratis!'}
          </em>
        </p>
      </div>
      <Button
        href={'https://koala.svsticky.nl/activities/' + id}
        target="_blank"
      >
        <p>
          Inschrijven <i className="item-text icon external" />
        </p>
      </Button>
    </Card>
  );
};

const Hidden = styled.div`
  z-index: -1;
  visibility: hidden;
`;

const ActivityWrapper = styled.div`
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
`;
