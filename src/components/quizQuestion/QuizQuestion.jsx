/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import styles from "./quizquestion.module.css";
import correctIcon from "../../assets/images/icon-correct.svg";
import errorIcon from "../../assets/images/icon-error.svg";

export default function QuizQuestion({
  quiz,
  count,
  setCount,
  setCorrectCount,
}) {
  const [guess, setGuess] = useState(null);
  const [submitted, setSbumitted] = useState(false);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);

  const questions = quiz.questions;
  const question = questions[count].question;
  const options = questions[count].options;
  const answer = questions[count].answer;
  const optionsKey = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess) {
      setSbumitted(true);
      setCorrectCount((prev) => prev + (guess === answer ? 1 : 0));
    } else {
      setError(true);
    }
  };

  const handleChange = (event) => {
    if (error) setError(false);
    setGuess(event.target.value);
  };

  const handleBorder = (value, answer) => {
    return value === answer
      ? styles.correctBorder
      : styles.incorrectBorder;
  };

  const handleBg = (value, answer) => {
    return value === answer ? styles.correctBg : styles.incorrectBg;
  };

  return (
    <section>
      <h2>Question {count + 1} of 10</h2>
      <p className={styles.question}>{question}</p>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${(count + 1) * 10}%` }}
        ></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.optionsContainer}
      >
        {options.map((value, i) => (
          <label
            key={i}
            htmlFor={optionsKey[i]}
            className={`${styles.optionContainer} ${
              submitted &&
              inputRefs.current[i].checked &&
              handleBorder(value, answer)
            }`}
          >
            <input
              ref={(input) => (inputRefs.current[i] = input)}
              type="radio"
              name="option"
              value={value}
              id={optionsKey[i]}
              onChange={handleChange}
              checked={guess === value}
              disabled={submitted}
            />
            <span
              className={`${styles.key} ${
                submitted &&
                inputRefs.current[i].checked &&
                handleBg(value, answer)
              }`}
            >
              {optionsKey[i]}
            </span>
            <span className={styles.option}>{value}</span>
            {submitted && value === answer && (
              <img
                className={`${styles.icon}`}
                src={correctIcon}
                alt="Correct Icon"
              />
            )}
            {submitted &&
              value !== answer &&
              inputRefs.current[i].checked && (
                <img
                  className={`${styles.icon}`}
                  src={errorIcon}
                  alt="Error Icon"
                />
              )}
          </label>
        ))}
        {!submitted && (
          <button className={styles.button}>Submit Answer</button>
        )}
      </form>
      {submitted && (
        <button
          className={styles.button}
          onClick={() => {
            setCount((prev) => prev + 1);
            setGuess(null);
            setSbumitted(false);
          }}
        >
          Next Question
        </button>
      )}
      {error && (
        <div className={styles.error}>
          <img src={errorIcon} alt="Error Icon" />
          <span>Please select an answer</span>
        </div>
      )}
    </section>
  );
}
