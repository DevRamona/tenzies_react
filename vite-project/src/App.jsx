import { useState } from "react";
import React from "react";
import Confetti from 'react-confetti'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tenzies from "./Components/Tenzies";
import Dices from "./Components/Dices";
import { nanoid } from "nanoid";

function App() {
  const [diceChange, setDiceChange] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false)
  
  React.useEffect(() => {
   const allHeld = diceChange.every(die => die.isHeld)
   const firstValue = diceChange[0].value
   const allSameValue = diceChange.every(die => die.value === firstValue)
   if(allHeld && allSameValue) {
    setTenzies(true) 
      console.log("You won")
    
   }
  }, [diceChange])

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
    if(!tenzies) {
      setDiceChange(oldDice => oldDice.map(die => {
        return die.isHeld ?
        die :
        generateNewDie()
      }))

    } else {
      setTenzies(false)
      setDiceChange(allNewDice())
    }
    
  }

  function holdDice(id) {
    setDiceChange(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}

  const diceElements = diceChange.map(die => (
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
      {tenzies && <Confetti/> }

      <div className="absolute top-10 right-[28rem]">
      
        <div className="p-8 flex justify-center flex-col items-center">
        
        <h1 className="m-1 text-2xl font-medium">Tenzies</h1>
        <p className="w-64 mb-2">Roll until all dice are the same. 
          Click each die to freeze it at its current value between rolls.</p>
          
          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            {diceElements}
          </div>
        </div>
        

        <button
          className="border bg-blue-700 px-6 py-2 mb-4 rounded-md cursor-pointer
     text-white text-2xl"
          onClick={rollDice}
        >
          {tenzies ? "New game" : "Roll"}
        </button>
      </div>
    </>
  );
}

export default App;
