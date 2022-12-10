import React from "react";
import TeamDetails from "./TeamDetails";
import NewTeamForm from "./NewTeamForm";



const TeamCard = ({team, setTeam}) => {
const teams = team.map((t) => {
    return (
        <TeamDetails t= {t} key = {t.id}>
        </TeamDetails>
    );
})
    return (
        <div>    
         <NewTeamForm 
        team={team}
        setTeam={setTeam}
        />
        <div className="allCards">
        {teams}
        </div>
        </div>
    )
}
export default TeamCard