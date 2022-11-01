import d20 from './d20large.svg';
import './css/App.css';
import { roll, disadvantage, advantage } from './Roll';
import DiceMod from './Roll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={d20} className="App-logo" alt="logo" id="first" style={{display:'none'}} />
          <img src={d20} className="App-logo" alt="logo" id="second" style={{display:'none'}}/>
          <p className="emote" id="emote"></p>
        </div>
        <p id="total">
          Time to roll.
        </p>

        <div className="row">
          {/* <div className="column">
            <p>Advantage</p>
            <label className="switch">
              <input type="checkbox" onInputCapture={advantage}/>
              <span className="slider round"></span>
            </label>  
          </div> */}
          <div>
            <button className="btn-roll" onClick={roll}>ROLL</button>
          </div>
          {/* <div className="column">
            <p>Disadvantage</p>
            <label className="switch">
              <input type="checkbox" onInputCapture={disadvantage}/>
              <span className="slider round dis"></span>
            </label>  
          </div> */}
        </div>
        <div className="row">
          <fieldset className="multiswitch" data-theme="advdis">
            <div className="slide-container">
              <input type="radio" name="advdis" id="advdis1" checked/>
              <label for="advdis1">Normal</label>
              <input type="radio" name="advdis" id="advdis2"/>
              <label for="advdis2">Advantage</label>
              <input type="radio" name="advdis" id="advdis3"/>
              <label for="advdis3">Disadvantage</label>
              <a className="slide" aria-hidden="true"></a>
            </div>
          </fieldset>
        </div>
        <div>
          <DiceMod />
        </div>
      </header>
    </div>
  );
}

//TO DO:
// change ADV/DIS into toggles or checkboxes with auto-clear
// display multiple dice numbers for ADV/DIS rolls
// offClick functionality for ADV and DIS buttons
// animate die/dice onClick for ROLL button, then wait, then execute logic
//  dice in place of emote when no number is displayed/while rolling
// CSS for DiceMod form (may need to use jQuery)
// resize/format page and other visuals

export default App;
