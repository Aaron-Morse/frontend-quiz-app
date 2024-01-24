/* eslint-disable react/prop-types */
import styles from "./themeselector.module.css";
import sunLight from "../../assets/images/icon-sun-light.svg";
import sunDark from "../../assets/images/icon-sun-dark.svg";
import moonLight from "../../assets/images/icon-moon-light.svg";
import moonDark from "../../assets/images/icon-moon-dark.svg";

export default function ThemeSelector({ darkMode, setDarkMode }) {
  return (
    <div className={styles.container}>
      <img src={darkMode ? sunLight : sunDark} />
      <label className={styles.toggle}>
        <input type="checkbox" />
        <span
          className={styles.slider}
          onClick={() => setDarkMode((prev) => !prev)}
        ></span>
      </label>
      <img src={darkMode ? moonLight : moonDark} />
    </div>
  );
}
