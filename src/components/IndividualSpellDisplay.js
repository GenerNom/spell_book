const IndividualSpellDisplay  = ({spell}) => {
    let visibilitySymbol = "show";
    let visible = false
    const toggleVisibility = () => {
        visible = !visible
        if(visible) {visibilitySymbol = "hide"} else {visibilitySymbol = "show"} 
    }
    return (
        <div id="DisplaySpell">
            <div className="header"><h3>{spell.name}</h3> {spell.class} {spell.level} <div className={"floatRight"} onClick={toggleVisibility()}><h3>{visibilitySymbol}</h3></div></div>
            <div className={visibilitySymbol}>
                Casting Time:{spell.castingTime} <br/> 
                Range:{spell.range}   <br/>
                Components:{spell.components}  <br/>
                Duration:{spell.duration}    <br/>
                {spell.description} <br/>
                Source:{spell.source}  <br/>
            </div>
        </div>
    );
}

export default IndividualSpellDisplay