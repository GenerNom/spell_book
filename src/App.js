import './App.css';
import SpellListDisplay from './components/SpellListDisplay';
import spellsToDisplay from './spellList.json'
function App() {

  return (
    <div className="App">
      <SpellListDisplay displaySpells={spellsToDisplay}/>
    </div>
  );
}

export default App;
