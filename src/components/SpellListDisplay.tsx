import Spell from "../type/Spell";

const SpellListDisplay  = ({...displaySpells}:Array<Spell>) : JSX.Element => {
    return (
        <div>
            {displaySpells}
        </div>
    );
}

export default SpellListDisplay