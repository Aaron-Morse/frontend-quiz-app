/* eslint-disable react/prop-types */
import QuizBadge from "../quizBadge/QuizBadge";
import styles from "./quizcompleted.module.css";

export default function QuizCompleted({
  correctCount,
  quiz,
  setQuiz,
  setCount,
  setCorrectCount,
}) {
  const reset = () => {
    setQuiz(null);
    setCount(0);
    setCorrectCount(0);
  };

  return (
    <>
      <h1>
        Quiz completed <span>You scored...</span>
      </h1>
      <div className={styles.container}>
        <QuizBadge quiz={quiz} />
        <p className={styles.score}>{correctCount}</p>
        <span>out of 10</span>
      </div>
      <button className={styles.button} onClick={() => reset()}>
        Play Again
      </button>
    </>
  );
}
