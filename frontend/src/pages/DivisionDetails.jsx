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
    <container className="divisionCard">
      <div>
        <img src={logo} alt="divisionImage" />
      </div>
      <div className="divisionContainer">
        <button className="deleteBtn" onClick={handleDeleteClick}>
          Trash this Team!
        </button>
        <h5 classname="divisionName">{name}</h5>
        <p className="divisionStats">
          Match Played: {mp}, Won: {won}, Draw: {draw}, Lost: {lost}, Last 5 Games: {last5}, Points: {points}
        </p>
      </div>
    </container>
    )}

    export default DivisionDetails;