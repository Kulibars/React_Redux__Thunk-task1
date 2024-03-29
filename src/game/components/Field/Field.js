import { FieldLavout } from "./FieldLavout.js";
import { useSelector, useDispatch } from "react-redux";
import { WIN_PATTERNS } from "../../constants/constants.js";
import { checkDraw } from "../../utils/utils.js";
import {
  setCurrentPlayer,
  setNewField,
  setIsGameEnded,
  setWinner,
} from "../../redux/actions/gameActions.js";

export const Field = () => {
  const field = useSelector((state) => state.field);
  const isGameEnded = useSelector((state) => state.isGameEnded);
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const dispatch = useDispatch();

  function PlayerTurn(el, index) {
    if (!isGameEnded) {
      const copyField = [...field];
      const indexValue = index;
      if (el === "") {
        copyField.splice(indexValue, 1, currentPlayer);

        if (currentPlayer === "X") {
          dispatch(setCurrentPlayer("O"));
          dispatch(setNewField(copyField));
        } else {
          dispatch(setCurrentPlayer("X"));
          dispatch(setNewField(copyField));
        }
      }
      dispatch(checkDraw(copyField));
      getWinner(copyField);
    }
  }

  function getWinner(copyField) {
    if (!isGameEnded) {
      for (let i = 0; i < WIN_PATTERNS.length; i++) {
        let el = WIN_PATTERNS[i];
        let fildEl = [];
        for (let j = 0; j < el.length; j++) {
          fildEl.push(copyField[el[j]]);
        }
        if (fildEl.join("") === "XXX") {
          dispatch(setIsGameEnded(true));
          dispatch(setWinner("X"));
        }
        if (fildEl.join("") === "OOO") {
          dispatch(setIsGameEnded(true));
          dispatch(setWinner("O"));
        }
      }
    }
  }

  return <FieldLavout field={field} playersMove={PlayerTurn} />;
};
