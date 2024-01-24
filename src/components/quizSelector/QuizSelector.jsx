/* eslint-disable react/prop-types */
import quizzes from "../../data.json";
import QuizBadge from "../quizBadge/QuizBadge";
import styles from "./quizselector.module.css";

export default function QuizSelector({ setQuiz }) {
  const quizzesData = quizzes.quizzes;
  console.log(quizzesData);

  return (
    <>
      <h1>
        Welcome to the <span>Frontend Quiz!</span>
      </h1>
      <h2>Pick a subject to get started.</h2>
      <section>
        {quizzesData.map((quiz, i) => (
          <div
            key={i}
            className={styles.container}
            onClick={() => setQuiz(quizzesData[i])}
          >
            <QuizBadge quiz={quiz} />
          </div>
        ))}
      </section>
    </>
  );
}
