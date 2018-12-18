import React from 'react';
import styled from 'styled-components';
import { Button, Card, Image } from 'semantic-ui-react';
import Currency from 'react-currency-formatter';
import TurnReveal, { Transition, Direction } from '$/components/TurnReveal';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoTransition: Transition.hide,
      infoDirection: Direction.right,
    };
    this.animateInfo = this.animateInfo.bind(this);
    this.toggleInfoVisibility = this.toggleInfoVisibility.bind(this);
    this.revealRef = React.createRef();
  }

  animateInfo(event, transition) {
    event.preventDefault();
    this.setState({
      infoTransition: transition,
      infoDirection: getClosestEdge(event, this.revealRef.current),
    });
  }

  toggleInfoVisibility() {
    this.setState(prevState => {
      if (prevState.infoTransition === Transition.hide)
        return {
          infoTransition: Transition.show,
          infoDirection: Direction.left,
        };
      else
        return {
          infoTransition: Transition.hide,
          infoDirection: Direction.right,
        };
    });
  }

  render() {
    const { poster, name } = this.props.activity;
    return (
      // getBoundingClientRect is undefined on React components, so we need a plain DOM element here.
      // Putting the eventHandlers on the TurnReveal component also doesn't work for some reason.
      <div
        onMouseEnter={e => this.animateInfo(e, Transition.show)}
        onMouseLeave={e => this.animateInfo(e, Transition.hide)}
        onTouchEnd={this.toggleInfoVisibility}
        ref={this.revealRef}
      >
        <TurnReveal
          back={renderPoster(poster, name)}
          transition={this.state.infoTransition}
          direction={this.state.infoDirection}
        >
          {renderInfo(this.props.activity)}
        </TurnReveal>
      </div>
    );
  }
}

const renderPoster = (posterUrl, activityName) => (
  <Image size="medium" src={posterUrl} alt={'Poster voor ' + activityName} />
);

const renderInfo = ({ id, location, name, price }) => (
  <FullSizeCard>
    <MinHeightContent>
      <Card.Header>{name}</Card.Header>
    </MinHeightContent>
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
    <ButtonWrapper>
      {/* without a div around the button the height of the label would not be taken into account */}
      <Button
        href={'https://koala.svsticky.nl/activities/' + id}
        target="_blank"
        content="Inschrijven"
        icon="external"
        labelPosition="right"
      />
    </ButtonWrapper>
  </FullSizeCard>
);

const MinHeightContent = styled(Card.Content)`
  &&&& {
    flex-grow: 0;
  }
`;

const FullSizeCard = styled(Card)`
  &&& {
    width: 100%;
  }

  height: 100%;
  overflow: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;

  .button {
    flex: 1;
  }
`;

const getClosestEdge = (event, element) => {
  const { width, height, top, left } = element.getBoundingClientRect();
  const l = event.pageX - (left + window.pageXOffset);
  const t = event.pageY - (top + window.pageYOffset);

  const closestHorizontalEdge =
    t > 0.5 * height
      ? { edge: Direction.bottom, distance: height - t }
      : {
          edge: Direction.top,
          distance: t,
        };

  const closestVerticalEdge =
    l > 0.5 * width
      ? { edge: Direction.right, distance: width - l }
      : {
          edge: Direction.left,
          distance: l,
        };

  return closestHorizontalEdge.distance < closestVerticalEdge.distance
    ? closestHorizontalEdge.edge
    : closestVerticalEdge.edge;
};
