import React from 'react';
import styled from 'styled-components';

const BALL_SPEED = 5;
const BALL_DIAMETER = 20;

const BallWrapper = styled.div.attrs({
  style: ({ top, left }) => ({
    transform: `translate3d(${left}px, ${top}px, 0px)`,
  }),
})`
  background-color: black;
  border-radius: 50%;
  height: ${BALL_DIAMETER}px;
  width: ${BALL_DIAMETER}px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: grab;
  will-change: transform;
`;

class Ball extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: props.top,
      left: props.left,
      speed: BALL_SPEED,
      deltaX: 1,
      deltaY: 1,
    };

    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    const { delay } = this.props;
    setTimeout(() => requestAnimationFrame(this.timer), delay);
  }

  timer() {
    this.setState(state => {
      let newDeltaX = state.deltaX;
      let newDeltaY = state.deltaY;
      const clientRect = document.documentElement.getBoundingClientRect();

      if (state.left >= clientRect.width - BALL_DIAMETER) {
        newDeltaX = -1;
      } else if (state.left <= 0) {
        newDeltaX = 1;
      }

      if (state.top >= clientRect.height - BALL_DIAMETER) {
        newDeltaY = -1;
      } else if (state.top <= 0) {
        newDeltaY = 1;
      }

      return {
        deltaX: newDeltaX,
        deltaY: newDeltaY,
        top: state.top + state.speed * newDeltaY,
        left: state.left + state.speed * newDeltaX,
      };
    });

    requestAnimationFrame(this.timer);
  }

  render() {
    return <BallWrapper top={this.state.top} left={this.state.left} />;
  }
}

export default Ball;
