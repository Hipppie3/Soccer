import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function PlayerDetails({ p, onDeletePlayer, handlePosition }) {
    const {name, goals, image, position, age, country} = p;
    const [positions, setPositions] = useState("")

function handleDeleteClick() {
  fetch(`/api/players/${p.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeletePlayer(p);
  });
}

const handleUpdatePosition = () => {
  fetch(`/api/players/${p.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
  },
  body: JSON.stringify({
      position: position
  })
})
  .then((r) => r.json())
  .then((newPosition) => {
      handlePosition(newPosition)
  })
  setPositions("");
}

  return ( 
      <div>
        <img src={image} alt="playerImage" />
      <div className="playerContainer">
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Player!
        </button>
        <h5 classname="playerName">{name}</h5>
        <p className="playerStats">
          Position: {position}, Age: {age}, Country: {country}, Goals: {goals}
        </p>
      </div>
      <div>
      <input 
      type="text" 
      onChange = {(e)=>{setPositions(e.target.value)}}
      value={positions} 
      />
        <button onClick={handleUpdatePosition}>Update Position</button>
      </div>
      </div>
    )}

    export default PlayerDetails;