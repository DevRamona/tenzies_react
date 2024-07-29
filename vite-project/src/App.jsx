import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tenzies from "./Components/Tenzies";
import Dices from "./Components/Dices";
import { nanoid } from "nanoid";

function App() {
  const [diceChange, setDiceChange] = useState(allNewDice());

function generateNewDie() {
  return {
    value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()

  }
}
  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }

    return newDice;
  }
  function rollDice() {
    setDiceChange(oldDice => oldDice.map(die => {
      return die.isHeld ?
      die :
      generateNewDie()
    }));
  }

  function holdDice(id) {
    setDiceChange(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}

  const diceElements = diceChange.map((die) => (
    <Dices
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <>
      <Tenzies />
      <div className="absolute top-10 right-[28rem]">
        <div className="p-8 flex justify-center flex-col items-center">
          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            {diceElements}
          </div>
        </div>
        <button
          className="border bg-blue-700 px-6 py-3 rounded-md cursor-pointer
     text-white text-2xl"
          onClick={rollDice}
        >
          Roll
        </button>
      </div>
    </>
  );
}

export default App;
