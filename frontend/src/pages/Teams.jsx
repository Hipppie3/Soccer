import React, {useEffect, useState}  from "react";
import TeamCard from "./TeamCard";
import TeamSearch from "./TeamSearch"
const Team = () => {
    const [searchTeam, setSearchTeam] = useState("");
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch("/api/teams").then((r) => {
          if (r.ok) {
            r.json().then((team) => setTeam(team));
          }
        });
      }, []);
      console.log(team)

      const showTeam = team.filter((t) => {
        return t.name.toLowerCase().includes(searchTeam.toLowerCase())
      })

    return (
      <div>
        <TeamSearch 
        searchTeam={searchTeam}
        onSearchTeam={setSearchTeam}/>
        <br/>
        <TeamCard team={showTeam}
        setTeam={setTeam}/>
      </div>)
}
export default Team;