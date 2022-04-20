import IndividualSpellDisplay from "./IndividualSpellDisplay";

const SpellListDisplay  = ({displaySpells}) => {
    const Spells = ({spellList}) => {
        return spellList.map((spell) => {
            return <IndividualSpellDisplay spell={spell} key={spell.name} />
        })
    }
    return (
        <div id="DisplayList">
                {<Spells spellList={displaySpells}/>}
        </div>
    );
}

export default SpellListDisplay