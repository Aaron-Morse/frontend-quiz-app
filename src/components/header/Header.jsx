import QuizBadge from "../quizBadge/QuizBadge";
import ThemeSelector from "../themeSelector/ThemeSelector";
import styles from "./header.module.css";

export default function Header({ quiz, darkMode, setDarkMode }) {
  return (
    <header>
      <QuizBadge quiz={quiz} />
      <ThemeSelector darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}
