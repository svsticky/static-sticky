import React from 'react';
import styled from 'styled-components';
import { Button, Card, Image } from 'semantic-ui-react';
import Currency from 'react-currency-formatter';
import TurnReveal, { Direction, Transition } from '$/components/TurnReveal';

export default class Activity extends React.Component {
  state = {
    infoTransition: Transition.hide,
    infoDirection: Direction.right,
    // We need to detect if the user is using a touch interface, because for some reason mouse events were still firing
    // on quick consecutive touches. Better solutions are welcome!
    registeredTouchEvent: false,
  };

  revealRef = React.createRef();

  animateInfo = (event, transition) => {
    event.preventDefault();
    this.setState({
      infoTransition: transition,
      infoDirection: getClosestEdge(event, this.revealRef.current),
    });
  };

  toggleInfoVisibility = () => {
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
  };

  onTouchEnd = event => {
    event.preventDefault();
    this.toggleInfoVisibility();
    this.setState({ registeredTouchEvent: true });
  };

  onMouse = (event, transition) => {
    if (!this.state.registeredTouchEvent) this.animateInfo(event, transition);
  };

  render() {
    const { thumbnail, name } = this.props.activity;
    return (
      // getBoundingClientRect is undefined on React components, so we need a plain DOM element here.
      // Putting the eventHandlers on the TurnReveal component also doesn't work for some reason.
      <TurnRevealWrapper>
        <div
          onMouseEnter={e => this.onMouse(e, Transition.show)}
          onMouseLeave={e => this.onMouse(e, Transition.hide)}
          onTouchEnd={this.onTouchEnd}
          ref={this.revealRef}
          className="turnreveal-container"
        >
          <TurnReveal
            back={renderPoster(thumbnail, name)}
            transition={this.state.infoTransition}
            direction={this.state.infoDirection}
          >
            {renderInfo(this.props.activity)}
          </TurnReveal>
        </div>
      </TurnRevealWrapper>
    );
  }
}

const renderPoster = (posterUrl, activityName) => (
  <StyledImage
    size="medium"
    src={posterUrl}
    alt={'Poster voor ' + activityName}
  />
);

const renderInfo = ({ id, location, name, price, description }) => (
  <FullSizeCard fluid>
    <FlexContainer>
      <div className="title">
        <h3>{name}</h3>
      </div>
      {location && (
        <div className="location">
          <strong>Locatie: </strong>
          <em>{location}</em>
        </div>
      )}
      <div className="price">
        <strong>Prijs: </strong>
        <em>
          {price !== 0 ? (
            <Currency quantity={parseFloat(price)} currency="EUR" />
          ) : (
            'Gratis!'
          )}
        </em>
      </div>
      <div className="description">
        <em>{description}</em>
      </div>
      <div>
        {/* without a div around the button the height of the label would not be taken into account */}
        <Button
          fluid
          primary
          href={'https://koala.svsticky.nl/activities/' + id}
          target="_blank"
          content="Inschrijven"
          icon="external"
          labelPosition="right"
        />
      </div>
    </FlexContainer>
  </FullSizeCard>
);

const StyledImage = styled(Image)`
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const FullSizeCard = styled(Card)`
  height: 100%;
  overflow: auto;
`;

const TurnRevealWrapper = styled.div`
  .turnreveal-container {
    display: flex;
    justify-content: center;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .title .location .price .button {
    flex-shrink: 1;
  }
  .title {
    margin-bottom: 0.5rem;
  }
  .description {
    flex-grow: 1;
    margin: 1rem 0;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;
    border-bottom: 1px dotted #ccc; /* IE */
    &::-webkit-scrollbar {
      /* WebKit */
      width: 0;
      height: 0;
    }
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
