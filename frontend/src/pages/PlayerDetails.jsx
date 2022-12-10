import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";


function PlayerDetails({p, onDeletePlayer, handlePosition}) {
    const {name, goals, image, position, age, country} = p;
    const [positions, setPositions] = useState("")

function handleDeleteClick() {
  fetch(`/api/players/${p.id}`, {
    method: "DELETE",
  })

    onDeletePlayer(p);
  };
  const handleUpdatePosition = () => {
  fetch(`/api/players/${p.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
  },
  body: JSON.stringify({
      position: positions
  })
})
  .then((r) => r.json())
  .then((newPosition) => {
  handlePosition(newPosition)
  })
  setPositions("");
}



  return ( 
    
   <div className="card">
    <img src={image} alt="playerImage"/>
    <div className="container">
      <div className="title">
        {name}
        <button className="deleteBtn" onClick={handleDeleteClick}>
          🥾 ☝ Out
        </button>
        </div>
      <ul className="playerStats"> 
      <li>Position: {position}</li>
      <li>Age: {age}</li>
      <li>Country: {country}</li> 
      <li> Goals: {goals}</li> 
      <li> <input 
      type="text" 
      onChange = {(e)=>{setPositions(e.target.value)}}
      value={positions} 
      />
        <button className="update" onClick={handleUpdatePosition}>Update Position</button></li>
      </ul>
      </div>
    </div>
 
    

    )}

    export default PlayerDetails;