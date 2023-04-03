import React from "react";
import css from "./Statistics.module.css";
// import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={`${css.container} list`}>
      <li className={css.item}>
        <p>{good}</p>
        <p>Good</p>
      </li>
      <li className={css.item}>
        <p>{neutral}</p>
        <p>Neutral</p>
      </li>
      <li className={css.item}>
        <p>{bad}</p>
        <p>Bad</p>
      </li>
      <li className={css.item}>
        <p>{total}</p>
        <p>Total</p>
      </li>
      <li className={css.item}>
        <p>{positiveFeedback}%</p>
        <p>Positive feadback</p>
      </li>
    </ul>
  );
};

export default Statistics;

// Сontrollers.propTypes = {
//   good: PropTypes.func.isRequired,
//   neutral: PropTypes.func.isRequired,
//   bad: PropTypes.func.isRequired,
// };
