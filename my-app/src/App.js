import d20 from './d20large.svg';
import './App.css';
import { roll, disadvantage, advantage } from './Roll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={d20} className="App-logo" alt="logo" />
        <div>
          <p id="emote">...</p>
        </div>
        <p id="total">
          Time to roll.
        </p>

        <div className="container">
          <button className="btn-adv" onClick={advantage}>ADV</button>
          <button className="btn-roll" onClick={roll}>ROLL</button>
          <button className="btn-dis" onClick={disadvantage}>DIS</button>
        </div>
        <div>
          <p className="mod-text">Dice Modifier</p>
        </div>
        <div>
          <form>
            <input  className="modifier" type="number" id="modifier" name="modifier" min="-99" max="99"></input>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
