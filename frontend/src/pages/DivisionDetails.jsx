import React, {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";

function DivisionDetails({d, onDeleteDivision}) {
    const {name, logo, mp, won, draw, lost, last5, points} = d;

function handleDeleteClick() {
  fetch(`/api/divisions/${d.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => {
    onDeleteDivision(d);
  });
}

  return ( 
 
    <div className="card">
    <img src={logo} alt="divisionImage" />
    <div className="container">
      <div className="titles">
        {name}
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Team!
        </button>
        </div>
        <ul className="divisionStats">
          <li>Match Played: {mp}</li>
          <li>Won: {won} Draw: {draw} Lost: {lost}</li>     
          <li>Last 5 Games: {last5}</li>
          <li>Points: {points}</li> 
        </ul>
      </div>
      </div>
 
    )}

    export default DivisionDetails;