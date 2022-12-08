import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function PlayerDetails({p, onDeletePlayer}) {
    const {name, goals, image, position, age, country} = p;

function handleDeleteClick() {
  fetch(`/api/players/${p.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeletePlayer(p);
  });
}

  return ( 
    <container className="playerCard">
      <div>
        <img src={image} alt="playerImage" />
      </div>
      <div className="playerContainer">
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Player!
        </button>
        <h5 classname="playerName">{name}</h5>
        <p className="playerStats">
          Position: {position}, Age: {age}, Country: {country}, Goals: {goals}
        </p>
      </div>
    </container>
    )}

    export default PlayerDetails;