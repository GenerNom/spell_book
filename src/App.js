import './App.css'
import SpellListDisplay from './components/SpellListDisplay'
import allSpells from './spellList.json'
import React, {useState} from 'react'

function App() {
  let nameFilter = React.createRef()
  let classFilter = React.createRef()
  let levelFilter = React.createRef()
  
  // const allClasses = [ "", "Artificer", "Bard", "Cleric", "Druid", "Paladin",  "Ranger", "Sorcerer", "Warlock", "Wizard"]
  const [spellsToDisplay, setSpellsToDisplay] = useState(allSpells.spells)
  const applyFilters = (spells) => {
    let nameFilterApplied = spells.filter(spell => spell.name.toLowerCase().includes(nameFilter.current.value.toLowerCase()))
    let ritualFilterApplied = nameFilterApplied
    if (document.getElementById("ritualCheckbox").checked) ritualFilterApplied = nameFilterApplied.filter((spell) => spell.ritual)
    let classFilterApplied = ritualFilterApplied.filter((spell) => {
      const classListOfSpell = spell.class.map(element=>element.toLowerCase())
      let containsClass = false
      classListOfSpell.forEach(element => {if(element.includes(classFilter.current.value)) containsClass = true});
      return containsClass
    })
    let levelFilterApplied = classFilterApplied.filter(spell => spell.level.toLowerCase().includes(levelFilter.current.value.toLowerCase()))
    setSpellsToDisplay(levelFilterApplied)
  }
  return (
    <div className="App">
      Spell Name: <input type="text" ref={nameFilter} /> Only Rituals: <input type="checkbox" id="ritualCheckbox" /><br/>
      Class: <input type="text" ref={classFilter} /> Level: <input type="text" ref={levelFilter} /> <br/>

      <button onClick={()=>applyFilters(allSpells.spells)}>Filter</button>
      <SpellListDisplay displaySpells={spellsToDisplay}/>
    </div>
  );
}

export default App;
