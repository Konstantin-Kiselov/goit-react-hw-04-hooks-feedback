import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.btnList}>
      {options.map((option) => {
        return (
          <button
            key={option}
            type="button"
            className={
              option === "good"
                ? s.good
                : option === "neutral"
                ? s.neutral
                : s.bad
            }
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
