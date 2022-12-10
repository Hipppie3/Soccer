import React, {useEffect, useState} from "react";
// import {useParams} from “react-router-dom”;

function TeamDetails({t}) {
  const {name, mascot, standing, top_scorer,team_captin} = t;
    




  return ( 
    
   <div className="card">
    <img src={mascot} alt="playerImage" className="teamImage"/>
    <div class="container">
      <div className="ttitle">
        {name}
        </div>
       
        <ul className="playerStats">
         
        <li>{top_scorer}</li>
        <li> Team Captain: {team_captin}</li>  
        <li> Standing: {standing}</li> 
        </ul>
      </div>
    </div>
 
    

    )}

export default TeamDetails;

//     <div className="card">
//  <img src={image} alt="playerImage" />
  
//   <div className="container">
//       <button className="deleteBtn" onClick={handleDeleteClick}>
//         Trash this Player!
//       </button>
//       <h5 classname="playerName">{name}</h5>
//       <p className="playerStats">
//         Position: {position}, Age: {age}, Country: {country}, Goals: {goals}
//       </p>
//     </div>

      
//      </div> 
    


  // return (
  //   <div className="card">

  //       <img src={mascot} alt="teamImage" />
 
  //     <div className="container">
  //       <h5 >{name}</h5>
  //       <p>
  //         {name}, {top_scorer}, {team_captin}, {standing}
  //       </p>
  //     </div>
  //   </div>
  // )}