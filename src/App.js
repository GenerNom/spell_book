import './App.css';
import Spell from './type/Spell';
import SpellListDisplay from './components/SpellListDisplay';

function App() {
  let spellsToDisplay= [{name:"name", level:"level"}]
  return (
    <div className="App">
      <SpellListDisplay displaySpells={spellsToDisplay}/>
    </div>
  );
}

export default App;
