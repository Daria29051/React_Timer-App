import React from "react";
import "../../styles/timer.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.setTiming();
  }

shouldComponentUpdate(nextProps, nextState) {
    if (nextState.timerId !== this.state.timerId) {
        return false;
    }
    return true;
}

  setTiming = () => {
    let timerJSON = localStorage.getItem("timer");
    let timer = JSON.parse(timerJSON);
    this.setState({
      minutes: Number(timer.minutes),
      seconds: Number(timer.seconds),
    });
  };

  start = () => {
    let scope = this;
    let timerId = setInterval(function () {
      scope.setState({ seconds: scope.state.seconds + 1 });
    }, 1000);
    
    this.setState({timerId : timerId})
  };

  stop = () => {
    clearInterval(this.state.timerId);
  };

  render() {
    return (
      <div className="timer__container">
        <p>
          Timer info: {this.state.minutes} : {this.state.seconds}
        </p>
        <div>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.start}>Start</button>
        </div>
      </div>
    );
  }
}


