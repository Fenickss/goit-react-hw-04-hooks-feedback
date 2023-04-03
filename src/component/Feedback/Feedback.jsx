import { useState } from 'react';
import Сontrollers from './Сontrollers';
import Statistics from '../Statistics';

const Feedback = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const total = countTotalFeedback();
  return (
    <div>
      <h1>Please leave feedback</h1>

      <Сontrollers
        good={() => setgood(good + 1)}
        neutral={() => setneutral(neutral + 1)}
        bad={() => setbad(bad + 1)}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positiveFeedback={total === 0 ? 0 : countPositiveFeedbackPercentage()}
      />
    </div>
  );
};

export default Feedback;
