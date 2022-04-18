import './App.scss';
import Die from "./Die"

function App() {
  return (
    <main className="app">
      <div className="app-container">
        <h2>Tenzies</h2>
        <p>Roll until all dice are the same.
           Click each die to freeze it at its 
           current value between rolls.      
        </p>
      <section className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />        
      </section>
      <button className="app-button">Roll</button>
      </div>
    </main>
  );
}

export default App;
