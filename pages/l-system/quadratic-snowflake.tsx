import LSystem from "../../components/LSystem";
import { NavElement } from "../../components/Navbar";
import styles from "../../styles/Fullscreen.module.css";

const QuadraticSnowflake = () => {
  return (
    <main className={styles.fullScreen}>
      <LSystem fractal="Quadratic Snowflake" />
      <NavElement />
    </main>
  );
};

export default QuadraticSnowflake;
