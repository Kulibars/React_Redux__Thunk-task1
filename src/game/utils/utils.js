import { setIsDraw } from "../redux/actions/gameActions";

export function checkDraw(copyField) {
  let x = copyField.every((el) => {
    return el !== "";
  });

  return setIsDraw(x);
}
