import { useEffect } from "react";
import type INumber from "../interfaces/INumber";
import styles from "../styles/Number.module.css";

const Number = ({ isShown, name, number, position }: INumber) => {
  useEffect(() => {
    if (position > 10) {
      // Do Something
    }
  }, [position]);
  return (
    <div className={styles.NumberCon}>
      <div className={styles.InnerNumberCon}>
        <h2 className={styles.NumberContent}>{isShown ? number : ""}</h2>
      </div>
      <h2 className={styles.NameContent}>{name}</h2>
    </div>
  );
};

export default Number;
