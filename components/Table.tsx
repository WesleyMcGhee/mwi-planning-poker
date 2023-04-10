import { useEffect, useState } from "react";
import Number from "./Number";
import styles from "../styles/Table.module.css";
import type ITable from "../interfaces/ITable";

const Table = ({ numbers }: ITable) => {
  const [numLength, setNumLengeth] = useState<number>(0);
  useEffect(() => {
    setNumLengeth(numbers.length);
  });
  // Need a function to take in the number of entities in numbers
  return (
    <div className={styles.TableContainer}>
      <div className={styles.Table}></div>
    </div>
  );
};

export default Table;
// table model
//  i i i
// i     i
// i     i
//  i i i
