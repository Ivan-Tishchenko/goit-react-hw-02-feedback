import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';


const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = { ...state };

  clickButton = name => {
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feadback">
          <FeedbackOptions callback={this.clickButton} state={this.state} />
        </Section>
        <Section title='Statistic'>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
        </Section>
      </>
    );
  }
}
