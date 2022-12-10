import React from "react";
// import {NavLink} from "react-router-dom";
import PlayerDetails from "./PlayerDetails";
import NewPlayerFrom from "./NewPlayerForm";

const PlayerCard = ({ player, setPlayer, onDeletePlayer, handlePosition }) => {
const players = player.map((p) => {
    return (
        <PlayerDetails 
        p= {p}
        key = {p.id}
        onDeletePlayer={onDeletePlayer}
        handlePosition={handlePosition}
        />
    );
}) 

    return (    
        <div>
            <NewPlayerFrom 
            player = {player}
            setPlayer = {setPlayer}
            />
            {/* <PlayerDetails></PlayerDetails> */}
            <div className="allCards">
            {players}
            </div>
        </div> 

    )
}

export default PlayerCard