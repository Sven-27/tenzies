import { useState } from "react"
import "./App.scss"
import Die from "./Die"
import { nanoid } from "nanoid" 

function App() {
  const [ diceValue, setDiceValue ] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false
      })
    }
    return newDice
  } 

  const holdDice = ( id: string ) => {
    setDiceValue(oldDice => oldDice.map( die => {
      return die.id === id ? 
        { ...die, isHeld: !die.isHeld } : die
    }))
  }

  const rollDice = () => {
    setDiceValue(allNewDice())
  }

  const randomDiceNumbers = diceValue.map( number => (
    <Die 
      key={ number.id } 
      value={ number.value } 
      isHeld={ number.isHeld }  
      holdDice={() => holdDice(number.id) }
    />
  ))


  return (
    <main className="app">
      <div className="app-container">
        <h2>Tenzies</h2>
        <p>Roll until all dice are the same.
           Click each die to freeze it at its 
           current value between rolls.      
        </p>
      <section className="dice-container">
        { randomDiceNumbers }      
      </section>
      <button 
        className="app-button"
        onClick={ rollDice }
      >
        Roll
      </button>
      </div>
    </main>
  );
}

export default App;
