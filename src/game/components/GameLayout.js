import { Field } from "./Field/Field.js";
import { Information } from "./Information/Information.js";
import styles from "./GameLavout.module.css";
import { resetGame } from "../redux/actions/gameActions.js";

export const GameLayout = () => {
  return (
    <div className={styles.gemeLuyoutContaner}>
      <Information />
      <Field />
      <button onClick={resetGame} className={styles.gameResetart}>
        Начать заново
      </button>
    </div>
  );
};
