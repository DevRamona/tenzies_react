import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tenzies from "./Components/Tenzies"
import Dices from "./Components/Dices"
function App() {
  const[diceChange, setDiceChange] = useState(allNewDice())
    
  function allNewDice() {
    const newDice = []
    
    for(let i = 0; i <10; i++) {
      newDice.push(Math.ceil(Math.random() * 6 ))
    }
    
    return newDice
  }
  const diceElements = diceChange.map(die => <Dices value={die}/>)

  return (
    <>
    <Tenzies/>
    <div className='p-8 flex justify-center flex-col items-center'>
    <div className='grid grid-cols-5 grid-rows-2 gap-4'>
    {diceElements}
    </div>

    </div>
    
    

      
    </>
  )
}

export default App
