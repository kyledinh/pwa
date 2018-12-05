import React, { Component } from 'react';

/*
  Useage: <CountdownClock drawFace={funcDisplayFromMilliseconds} targetTime={ms}/>
  props.drawFace is optional, defaults to Days and Seconds display
  props.targetTime is optional, defaults set to Xmas day 2018
*/

class CountdownClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetTime: props.targetTime || new Date(2018, 12, 25).getTime(),
      drawFace: props.drawFace || this.displayInDaysAndSeconds,
      clockFace: '--'
    }
  }

  displayInDaysAndSeconds = (ms) => {
    let days = Math.floor(ms / (24*60*60*1000));
    let secs = Math.floor(ms / 1000);
    return `${days} days or ${secs} seconds`;
  }

  diffToTargetTime(targetTime) {
    let nowTime = new Date().getTime();
    return targetTime - nowTime;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let diffTime = this.diffToTargetTime(this.state.targetTime);
      let display = this.state.drawFace(diffTime);
      this.setState({clockFace: display});
    }, 1000); // Interval for every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Countdown">
        CountdownClock:  {this.state.clockFace}
      </div>
    );
  }
}

export default CountdownClock;
