import { useEffect, useState } from "react"
import "./App.scss"
import Die from "./Die"
import { nanoid } from "nanoid" 
import Confetti from "react-confetti"

function App() {
  const [ diceValue, setDiceValue ] = useState(allNewDice())
  const [ tenzies, setTenzies ] = useState(false)

  function generateNewDie() {
    return {
        id: nanoid(),
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false
      }
  }

  function allNewDice() {
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
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
    if(!tenzies){
      setDiceValue(oldDice => oldDice.map(die => {
        return die.isHeld ?
               die :
               generateNewDie()
      }))
    }
    else{
      setTenzies(false)
      setDiceValue(allNewDice())
    }
  }

  const randomDiceNumbers = diceValue.map( number => (
    <Die 
      key={ number.id } 
      value={ number.value } 
      isHeld={ number.isHeld }  
      holdDice={() => holdDice(number.id) }
    />
  ))

  useEffect(() => {
    const allHeld = diceValue.every(die => die.isHeld)
    const firstValue = diceValue[0].value
    const allSameValue = diceValue.every(die => die.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true) 
      console.log("You won!")
    }
    console.log("changed")
  }, [diceValue])


  return (
    <main className="app">
      { tenzies && <Confetti /> }
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
        { tenzies ? "New game" : "Roll" }
      </button>
      </div>
    </main>
  );
}

export default App;
