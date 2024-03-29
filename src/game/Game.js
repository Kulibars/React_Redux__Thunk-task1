import { GameLayout } from "./components/GameLayout.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import styles from "./components/GameLavout.module.css";
import { resetartGame } from "./redux/actions/gameActions.js";

function Game() {
  const resetartGameButton = () => {
    store.dispatch(resetartGame());
  };

  return (
    <Provider store={store}>
      <GameLayout />
      <button onClick={resetartGameButton} className={styles.gameResetart}>
        Начать заново
      </button>
    </Provider>
  );
}

export default Game;
