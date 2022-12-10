import React from "react";

function PlayerSearch( {searchPlayer, onSearchPlayer} ) {
    return (
        <div className="playerSearch">
            <label className="labelName">Search YOUR favorite Player!</label>
            <input 
            type="text"
            id="search"
            placeholder="Type a Player..."
            onChange={(e) => onSearchPlayer(e.target.value)}
            value={searchPlayer}/>
        </div>
    );
}

export default PlayerSearch;