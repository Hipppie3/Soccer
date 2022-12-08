import React, {useEffect, useState} from "react";
// import {useParams} from “react-router-dom”;

function TeamDetails({t}) {
  const {name, mascot, standing, top_scorer,team_captin} = t;
    
  return (
    <container className="teamCard">
      <div>
        <img src={mascot} alt="teamImage" />
      </div>
      <div >
        <h5 >{name}</h5>
        <p>
          {name}, {top_scorer}, {team_captin}, {standing}
        </p>
      </div>
    </container>
  )}

export default TeamDetails;