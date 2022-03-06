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
      <section className="dies-container">
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
        <Die />
      </section>
      <button className="app-button">Roll</button>
      </div>
    </main>
  );
}

export default App;
