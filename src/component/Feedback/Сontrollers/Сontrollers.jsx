import React from "react";
import PropTypes from "prop-types";
import css from "./Controllers.module.css";

const Сontrollers = ({ good, neutral, bad }) => {
  return (
    <ul className={`list ${css.feedbackList}`}>
      <button className={css.btn} type="button" onClick={good}>
        good
      </button>
      <button className={css.btn} type="button" onClick={neutral}>
        neutral
      </button>
      <button className={css.btn} type="button" onClick={bad}>
        bad
      </button>
    </ul>
  );
};

export default Сontrollers;

Сontrollers.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
