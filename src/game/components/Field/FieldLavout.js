import styles from "./FieldLavout.module.css";

export const FieldLavout = ({ field, playersMove }) => {
  return field.map((el, index) => (
    <button
      className={styles.buttons}
      key={index}
      id={index}
      onClick={() => playersMove(el, index)}
    >
      {el}
    </button>
  ));
};
