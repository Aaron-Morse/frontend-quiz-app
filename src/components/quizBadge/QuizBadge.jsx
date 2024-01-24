/* eslint-disable react/prop-types */
import HTML from "../../assets/images/icon-html.svg";
import CSS from "../../assets/images/icon-css.svg";
import JavaScript from "../../assets/images/icon-js.svg";
import Accessibility from "../../assets/images/icon-accessibility.svg";
import styles from "./quizbadge.module.css";

export default function QuizBadge({ quiz }) {
  const images = {
    HTML,
    CSS,
    JavaScript,
    Accessibility,
  };

  const imageColors = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#EBF0FF",
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={quiz && { backgroundColor: imageColors[quiz.title] }}
      >
        <img src={quiz && images[quiz.title]} alt="" />
      </div>
      <p>{quiz && quiz.title}</p>
    </div>
  );
}
