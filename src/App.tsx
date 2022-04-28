import { useState } from "react"
import "./App.scss"
import Die from "./Die"

function App() {
  const allNewDice = () => {
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(Math.floor(Math.random() * 6) + 1)
    }
    return newDice
  } 

  const [ diceValue, setDiceValue ] = useState(allNewDice())

  const randomDiceNumbers = diceValue.map(( number, index ) => (
    <Die key={ index } value={ number } />
  ))

  const rollDice = () => {
    setDiceValue(allNewDice())
  }

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
        onClick={rollDice}
      >
        Roll
      </button>
      </div>
    </main>
  );
}

export default App;
