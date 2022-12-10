import React from "react";
// import {NavLink} from "react-router-dom";
import DivisionDetails from "./DivisionDetails";
import NewDivisionFrom from "./NewDivisionForm";

const DivisionCard = ({ division, setDivision, onDeleteDivision }) => {
const divisions = division.map((d) => {
    return (
        <DivisionDetails 
        d= {d}
        key = {d.id}
        onDeleteDivision={onDeleteDivision}
        />
    );
})

    return (    
        <div>
            <NewDivisionFrom 
            division = {division}
            setDivision = {setDivision}
            />
            {/* <PlayerDetails></PlayerDetails> */}
            <div className="allCards">
            {divisions}
        </div> 
        </div>

    )
}

export default DivisionCard;