import React from "react";

function TeamSearch( {searchTeam, onSearchTeam} ) {
    return (
        <div className="teamSearch">
            <label className="labelName">Search YOUR favorite Team!</label>
            <input 
            type="text"
            id="search"
            placeholder="Type a team..."
            onChange={(e) => onSearchTeam(e.target.value)}
            value={searchTeam}/>
        </div>
    );
}

export default TeamSearch;