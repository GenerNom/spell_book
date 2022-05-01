import { useState } from "react"

const IndividualSpellDisplay  = ({spell}) => {
    const [visibilitySymbol, setVisibilitySymbol] = useState("show")
    const [visible, setVisible] = useState(false)
    const isRitualSymbol = spell.ritual ? "(R)" : ""
    function toggleVisibility() {
        if (!visible) { setVisibilitySymbol("hide")}  else { setVisibilitySymbol("show")} 
        setVisible(!visible)
    }
    return (
        <div className="displaySpell">
            <div className="header"><h3 className="spellName">{spell.name}</h3> <h5 className="spellLevel">Level:{spell.level}  Classes:{spell.class.join(", ")} </h5><div className="smallText">{isRitualSymbol}</div><div className={"toggle"} ><h3 onClick={() =>  toggleVisibility()}> {visibilitySymbol}</h3></div></div>
            <div className={visibilitySymbol}>
                Casting Time:{spell.castingTime}    <br/> 
                Range:{spell.range}                 <br/>
                Components:{spell.components}       <br/>
                Duration:{spell.duration}           <br/>
                {spell.description}                 <br/>
                Source:{spell.source}               <br/>
            </div>
        </div>
    );
}

export default IndividualSpellDisplay