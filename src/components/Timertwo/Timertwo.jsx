import React from "react";
import "../../styles/timer.css";

export default class Timertwo extends React.Component {
  constructor(props) {
    super(props);

    const { minutes, seconds } = this.props;

    this.state = {
      minutes: minutes,
      seconds: seconds,
      timerId: null,
    };
  }

  static defaultProps = {
    minutes: 0,
    seconds: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.timerId !== this.state.timerId) {
      return false;
    }
    return true;
  }

  start = () => {
    if (this.state.timerId) {
      return;
    }

    let timerId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);

    this.setState({ timerId: timerId });
  };

  stop = () => {
    clearInterval(this.state.timerId);
    this.setState({ timerId: null });
  };

  render() {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer__container">
        <p>
          Timer info: {minutes} : {seconds}
        </p>

        <div>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.start}>Start</button>
        </div>
      </div>
    );
  }
}
