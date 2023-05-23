import React, { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleOnLeaveFeedback = ev => {
    const { name } = ev.currentTarget;

    name === 'good' && setGood(good + 1);
    name === 'neutral' && setNeutral(neutral + 1);
    name === 'bad' && setBad(bad + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <>
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          onLeaveFeedback={handleOnLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      {countTotalFeedback() !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section title="There is no feedback"></Section>
      )}
    </>
  );
};
