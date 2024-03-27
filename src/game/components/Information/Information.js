import { InformationLayout } from "./InformationLayout.js";
import { useSelector } from "react-redux";

export const Information = () => {
  const isDraw = useSelector((state) => state.isDraw);
  const isGameEnded = useSelector((state) => state.isGameEnded);
  const currentPlayer = useSelector((state) => state.currentPlayer);

  let status;

  if (!isDraw && !isGameEnded) {
    status = `Ходит: ${currentPlayer}`;
  }
  if (isGameEnded) {
    status = `Победил: ${currentPlayer}`;
  } else if (isDraw) {
    status = "Ничья";
  }

  return <InformationLayout status={status} />;
};
