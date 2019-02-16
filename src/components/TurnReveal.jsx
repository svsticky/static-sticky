// Adapted from https://codepen.io/noeldelgado/pen/pGwFx

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export default class TurnReveal extends React.Component {
  element = React.createRef();

  render() {
    // on the first render, this.element.current is still null, so we need these default values
    const hideAngles = {
      horizontal: '0',
      vertical: '0',
    };

    if (this.element.current) {
      const element = this.element.current;
      const rect = element.getBoundingClientRect();
      const { width, height } = rect;

      // recalculate the angles a hideable has to turn to disappear
      hideAngles.horizontal = getOutAngle(width) + 'rad';
      hideAngles.vertical = getOutAngle(height) + 'rad';
    }

    return (
      <Perspective>
        {/*getBoundingClientRect is undefined on React components, so we need a plain DOM element here*/}
        <div ref={this.element}>
          {this.props.back}
          {/*React.Children.toArray makes sure we get an array, even though props.children is just the child component if it's alone.*/}
          {React.Children.toArray(this.props.children).map((child, index) => (
            <Hideable
              transition={this.props.transition}
              direction={this.props.direction}
              hideAngles={hideAngles}
              key={index}
            >
              {child}
            </Hideable>
          ))}
        </div>
      </Perspective>
    );
  }
}

const perspective = 400;

export const Transition = { hide: 'hide', show: 'show' };

export const Direction = {
  right: 'right',
  top: 'top',
  left: 'left',
  bottom: 'bottom',
};

const directionTransforms = {
  right: { x: '100%', y: '0%' },
  top: { x: '50%', y: '0%' },
  left: { x: '0%', y: '0%' },
  bottom: { x: '50%', y: '100%' },
};

const getOutAngle = size => {
  return Math.atan2(size / 2, perspective) + 0.5 * Math.PI;
};

const animationProperties = props => {
  const directionTransform = directionTransforms[props.direction];
  return css`
    transform-origin: ${directionTransform.x} ${directionTransform.y};
    animation: ${turnAnimation(props)} 300ms ease 0ms 1 forwards;
  `;
};

const turnAnimation = ({
  transition,
  direction,
  hideAngles: { vertical, horizontal },
}) => {
  const horizontalVector = [
    0,
    direction === Direction.right ? -1 : 1,
    0,
    horizontal,
  ];
  const verticalVector = [direction === Direction.top ? -1 : 1, 0, 0, vertical];
  const hiddenVector =
    direction === Direction.right || direction === Direction.left
      ? horizontalVector
      : verticalVector;
  const visibleVector = [0, 0, 0, 0];

  const { fromVector, toVector, fromVisibility, toVisibility } =
    transition === Transition.hide
      ? {
          fromVector: visibleVector,
          toVector: hiddenVector,
          fromVisibility: 'visible',
          toVisibility: 'hidden',
        }
      : {
          fromVector: hiddenVector,
          toVector: visibleVector,
          fromVisibility: 'hidden',
          toVisibility: 'visible',
        };

  const toTransformString = vector => `transform: rotate3d(${vector.join()})`;

  return keyframes`
    from {
      visibility: ${fromVisibility};
      ${toTransformString(fromVector)};
    }
    to {
      visibility: ${toVisibility};
      ${toTransformString(toVector)};
    }
  `;
};

const Perspective = styled.div`
  display: inline-block;
  perspective: ${perspective}px;
  position: relative;
`;

const Hideable = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${props => animationProperties(props)}
`;
