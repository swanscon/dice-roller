import d20 from './d20large.svg';
import './App.css';
import { roll, disadvantage, advantage } from './Roll';
import DiceMod from './Roll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={d20} className="App-logo" alt="logo" />
          <img src={d20} className="App-logo" alt="logo" id="second" style={{display:'none'}}/>
        </div>
        <div>
          <p className="emote" id="emote">...</p>
        </div>
        <p id="total">
          Time to roll.
        </p>

        <div className="container">
          <button className="btn-adv" onClick={advantage}>ADV</button>
          <button className="btn-roll" onClick={roll}>ROLL</button>
          <button className="btn-dis" onClick={disadvantage}>DIS</button>
        </div>
        <DiceMod />
      </header>
    </div>
  );
}

//TO DO:
//display multiple dice numbers for ADV/DIS rolls
//offClick functionality for ADV and DIS buttons
//animate die/dice onClick for ROLL button, then wait, then execute logic
//CSS for DiceMod form (may need to use jQuery)
//resize/format page and other visuals

export default App;
