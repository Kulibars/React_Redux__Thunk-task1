import { Field } from "./Field/Field.js";
import { Information } from "./Information/Information.js";
import styles from "./GameLavout.module.css";

export const GameLayout = () => {
  return (
    <div className={styles.gemeLuyoutContaner}>
      <Information />
      <Field />
    </div>
  );
};
