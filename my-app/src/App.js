import d20 from './d20large.svg';
import './App.css';
import { roll, disadvantage, advantage, diceMod } from './Roll';

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
        <div>
          <p className="mod-text">Dice Modifier</p>
        </div>
        <div className="container">
          <button className="btn-mod" onClick={diceMod} id="neg5">-5</button>
          <button className="btn-mod" onClick={diceMod} id="neg4">-4</button>
          <button className="btn-mod" onClick={diceMod} id="neg3">-3</button>
          <button className="btn-mod" onClick={diceMod} id="neg2">-2</button>
          <button className="btn-mod" onClick={diceMod} id="neg1">-1</button>
          <button className="btn-mod" onClick={diceMod} id="zero">0</button>
          <button className="btn-mod" onClick={diceMod} id="pos1">+1</button>
          <button className="btn-mod" onClick={diceMod} id="pos2">+2</button>
          <button className="btn-mod" onClick={diceMod} id="pos3">+3</button>
          <button className="btn-mod" onClick={diceMod} id="pos4">+4</button>
          <button className="btn-mod" onClick={diceMod} id="pos5">+5</button>
        </div>
      </header>
    </div>
  );
}

export default App;
