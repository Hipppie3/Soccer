import React, {useEffect, useState}  from "react";

 
const Division = () => {
    const [division, setDivision] = useState([]);
    
    // const currentUser = useContext(UserContext)
    
    

    useEffect(() => {
        fetch("/api/divisions").then((r) => {
          if (r.ok) {
            r.json().then((division) => setDivision(division));
          }
        });
      }, [])

      console.log(division) }


      export default Division;