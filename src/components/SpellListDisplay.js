import Spell from "../type/Spell";

const SpellListDisplay  = ({...displaySpells}) => {
    return (
        <div>
            {displaySpells[0].name}
        </div>
    );
}

export default SpellListDisplay