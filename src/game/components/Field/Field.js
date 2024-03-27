import { FieldLavout } from "./FieldLavout.js";
import { playersMove } from "../../redux/actions/gameActions.js";
import { useSelector } from "react-redux";

export const Field = () => {
  const field = useSelector((state) => state.field);

  return <FieldLavout field={field} playersMove={playersMove} />;
};
