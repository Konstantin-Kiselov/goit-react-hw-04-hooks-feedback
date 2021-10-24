import React, { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Container from "./Container/Container";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = ["good", "neutral", "bad"];
  // const keys = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}
