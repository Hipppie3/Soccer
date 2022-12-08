import React from "react";
import TeamDetails from "./TeamDetails";


const TeamCard = ({team}) => {
const teams = team.map((t) => {
    return (
        <TeamDetails t= {t} key = {t.id}>
        </TeamDetails>
    );
})
    return (
        <div>
            {teams}
        </div>
    )
}
export default TeamCard