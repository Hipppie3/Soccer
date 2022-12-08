import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import DivisionCard from "./DivisionCard";

const Division = () => {
    const [division, setDivision] = useState([]);
    
   
    
    

    useEffect(() => {
        fetch("/api/divisions").then((r) => {
          if (r.ok) {
            r.json().then((division) => setDivision(division));
          }
        });
      }, []);

    function handleDeleteDivisions(divisionDelete) {
      const removeDivision = division.filter(
        (d) => d.id !== divisionDelete.id
      );
      setDivision(removeDivision)
    }

      
   

    return ( 
      <div>
        <DivisionCard 
        division={division} s
        setDivision={setDivision}
        onDeleteDivision={handleDeleteDivisions}
        />
      </div>)
  
}

export default Division;