import styles from "./Game.module.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>clique</button>
    </div>
  );
};

export default Game;