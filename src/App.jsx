import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import QuizSelector from "./components/quizSelector/QuizSelector";
import QuizQuestion from "./components/quizQuestion/QuizQuestion";
import QuizCompleted from "./components/quizCompleted/QuizCompleted";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Header
        quiz={quiz}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>
        {quiz === null && <QuizSelector setQuiz={setQuiz} />}
        {quiz && count < 10 && (
          <QuizQuestion
            quiz={quiz}
            count={count}
            setCount={setCount}
            setScore={setScore}
          />
        )}
        {count === 10 && (
          <QuizCompleted
            quiz={quiz}
            setQuiz={setQuiz}
            setCount={setCount}
            score={score}
            setScore={setScore}
          />
        )}
      </main>
    </>
  );
}
