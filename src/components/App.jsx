import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveFeedback: 0,
};

export class App extends Component {
  state = { ...state };

  clickButton = ({ target: { textContent } }) => {
    this.setState({
      [textContent]: this.state[textContent] + 1,
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage(textContent);
  };

  countTotalFeedback() {
    this.setState({ total: this.state.total ? this.state.total : 0 + 1 });
  }

  countPositiveFeedbackPercentage(button) {
    this.setState({
      positiveFeedback:
        button === 'good'
          ? Math.ceil(((this.state.good + 1) * 100) / (this.state.total + 1))
          : Math.ceil((this.state.good * 100) / (this.state.total + 1)),
    });
  }

  render() {
    return (
      <>
        <Section title={'Please leave feadback'}>
          <FeedbackOptions callback={this.clickButton} state={this.state} />
        </Section>
        <Section title={'Statistic'}>
          {this.state.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}
