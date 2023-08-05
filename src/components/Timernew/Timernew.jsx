import React from "react";
import "../../styles/timer.css";

export default class Timernew extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        minutes: this.props.timerStartData.minutes,
        seconds: this.props.timerStartData.seconds,
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
      let scope = this;
      console.log(scope);
      if (this.state.seconds === undefined) {
        this.setState({ minutes: this.props.minutes });
        this.setState({ seconds: this.props.seconds });
      }
  
      let timerId = setInterval(function () {
        scope.setState({ seconds: scope.state.seconds + 1 });
      }, 1000);
  
      this.setState({ timerId: timerId });
    };
  
    stop = () => {
      clearInterval(this.state.timerId);
    };
  
    render() {
      return (
        <div className="timer__container">
          <p>
            Timer info: {this.state.minutes === undefined
              ? this.props.minutes
              : this.state.minutes} : {this.state.seconds === undefined
              ? this.props.seconds
              : this.state.seconds}
          </p>
  
          <div>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.start}>Start</button>
          </div>
        </div>
      );
    }
  }