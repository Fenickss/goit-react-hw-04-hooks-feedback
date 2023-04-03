import React, { Component } from "react";
import Сontrollers from "./Сontrollers";
import Statistics from "../Statistics";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleIncrementGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };

  handleIncrementNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  handleIncrementBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  // };

  render() {
    const total = this.countTotalFeedback();
    return (
      <div>
        <h1>Please leave feedback</h1>

        <Сontrollers
          good={this.handleIncrementGood}
          neutral={this.handleIncrementNeutral}
          bad={this.handleIncrementBad}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positiveFeedback={
            total === 0 ? 0 : this.countPositiveFeedbackPercentage()
          }
        />
      </div>
    );
  }
}

export default Feedback;
