// css
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

//dados
import { wordsList } from "./data/words";

// components
import StartScreen from "./Components/StartScreen";
import GameOver from "./Components/GameOver";
import Game from "./Components/Game";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetter, setGuessedLetter] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  //seleciona palavra e categoria

  // pegando categoria aleatoria
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pegando palavre aleatoria
    const word =
      words[category][[Math.floor(Math.random() * words[category].length)]];
    return { word, category };
  };

  // inicia jogo
  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    // criando array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((i) => i.toLowerCase());

    //setando states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    console.log(category, word, wordLetters);

    setGameStage(stages[1].name);
  };

  // verificar letras
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // reiniciar
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetter={guessedLetter}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
