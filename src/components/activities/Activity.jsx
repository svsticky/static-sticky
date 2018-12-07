import React from 'react';
import styled from 'styled-components';
import { Button, Card, Image } from 'semantic-ui-react';
import ReactCardFlip from 'react-card-flip';
import Currency from 'react-currency-formatter';

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
      <div
        onMouseEnter={this.flipCard}
        onMouseLeave={this.flipCard}
        onTouchEnd={this.flipCard}
      >
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front">{renderPoster(poster, name)}</div>
          <div key="back">{renderInfo(this.props.activity)}</div>
        </ReactCardFlip>
        <Hidden>{renderPoster(poster, name)}</Hidden>
      </div>
    );
  }
}

const renderPoster = (posterUrl, activityName) => (
  <Image size="medium" src={posterUrl} alt={'Poster voor ' + activityName} />
);

const renderInfo = ({ id, location, name, price }) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>
        {location && (
          <p>
            <strong>Locatie: </strong>
            <em>{location}</em>
          </p>
        )}
        <p>
          <strong>Prijs: </strong>
          <em>
            {price !== 0 ? (
              <Currency quantity={parseFloat(price)} currency="EUR" />
            ) : (
              'Gratis!'
            )}
          </em>
        </p>
      </Card.Description>
    </Card.Content>
    <Button
      href={'https://koala.svsticky.nl/activities/' + id}
      target="_blank"
      content="Inschrijven"
      icon="external"
      labelPosition="right"
    />
  </Card>
);

const Hidden = styled.div`
  z-index: -1;
  visibility: hidden;
`;
