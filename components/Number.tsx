import type INumber from "../interfaces/INumber";
import styles from "../styles/Number.module.css";

const Number = ({ isShown, name, number }: INumber) => {
  return (
    <div className={styles.NumberContainer}>
      <h2>{number}</h2>
      <p>{name}</p>
    </div>
  );
};
