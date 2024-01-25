/* eslint-disable react/prop-types */
import QuizBadge from "../quizBadge/QuizBadge";
import styles from "./quizcompleted.module.css";

export default function QuizCompleted({
  quiz,
  setQuiz,
  setCount,
  score,
  setScore,
}) {
  const reset = () => {
    setQuiz(null);
    setCount(0);
    setScore(0);
  };

  return (
    <>
      <h1>
        Quiz completed <span>You scored...</span>
      </h1>
      <div className={styles.container}>
        <QuizBadge quiz={quiz} />
        <p className={styles.score}>{score}</p>
        <span>out of 10</span>
      </div>
      <button className={styles.button} onClick={() => reset()}>
        Play Again
      </button>
    </>
  );
}
