import React from "react";
// import {NavLink} from "react-router-dom";
import PlayerDetails from "./PlayerDetails";
import NewPlayerFrom from "./NewPlayerForm";

const PlayerCard = ({ player, setPlayer, onDeletePlayer }) => {
const players = player.map((p) => {
    return (
        <PlayerDetails 
        p= {p}
        key = {p.id}
        onDeletePlayer={onDeletePlayer}
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
            {players}
        </div> 

    )
}

export default PlayerCard