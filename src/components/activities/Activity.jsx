import React from 'react';
import styled from 'styled-components';
import { Button, Card, Image } from 'semantic-ui-react';
import Currency from 'react-currency-formatter';
import SanitizeHTML from 'sanitize-html';
import TurnReveal, { Direction, Transition } from '$/components/TurnReveal';

export default class Activity extends React.Component {
  state = {
    infoTransition: Transition.hide,
    infoDirection: Direction.right,
  };

  revealRef = React.createRef();

  animateInfo = (event, transition) => {
    event.preventDefault();
    this.setState({
      infoTransition: transition,
      infoDirection: getClosestEdge(event, this.revealRef.current),
    });
  };

  render() {
    const { thumbnail, name } = this.props.activity;
    return (
      // getBoundingClientRect is undefined on React components, so we need a plain DOM element here.
      // Putting the eventHandlers on the TurnReveal component also doesn't work for some reason.
      <TurnRevealWrapper>
        <div
          onMouseEnter={e => this.animateInfo(e, Transition.show)}
          onMouseLeave={e => this.animateInfo(e, Transition.hide)}
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
      <Title>
        <h3>{name}</h3>
      </Title>
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
      <Description>
        <em dangerouslySetInnerHTML={{ __html: SanitizeHTML(description) }} />
      </Description>
      <div>
        {/* without a div around the button the height of the label would not be taken into account */}
        <Button
          fluid
          primary
          href={'https://koala.svsticky.nl/activities/' + id}
          target="_blank"
          rel="noopener noreferrer"
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
  display: flex;
  justify-content: center;

  .turnreveal-container {
    width: fit-content;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.div`
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
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
