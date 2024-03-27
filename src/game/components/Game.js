import { GameLayout } from "./GameLayout.js";
import { Provider } from "react-redux";
import { store } from "../redux/store.js";

function Game() {
  return (
    <Provider store={store}>
      <GameLayout />
    </Provider>
  );
}

export default Game;
