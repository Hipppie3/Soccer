import React from "react";
import { useState } from "react";

function NewTeamForm({team, setTeam}) {
    const [name, setName] = useState("");
    const [mascot, setMascot] = useState("");
    const [top_scorer, setTop_Scorer] = useState("");
    const [team_captin, setTeam_Captin] = useState("");
    const [standing, setStanding] = useState("");

    function handleSumbit(e) {
        e.preventDefault();

        fetch("http:/api/teams", {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({
                name: name,
                mascot: mascot,
                top_scorer: top_scorer,
                team_captin: team_captin,
                standing: standing,
            }),
        })
        .then((r) => r.json())
        .then((newTeam) => {
            setTeam([...team, newTeam])
        });
        setName("");
        setMascot("");
        setTop_Scorer("");
        setTeam_Captin("");
        setStanding("");
    }

    return (
        <div>
            
            <form onSubmit={handleSumbit}>
                <h3 className="create"> Create An Awesome Team!</h3>
                <input
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
                </input>
                <input
                placeholder="Mascot"
                name="mascot"
                value={mascot}
                onChange={(e) => setMascot(e.target.value)}
                >
                </input>
                <input
                placeholder="Top Scorer"
                name="top_scorer"
                value={top_scorer}
                onChange={(e) => setTop_Scorer(e.target.value)}
                >
                </input>
                <input
                placeholder="Team Captin"
                name="team_captin"
                value={team_captin}
                onChange={(e) => setTeam_Captin(e.target.value)}
                >
                </input>
                <input
                placeholder="Standing"
                name="standing"
                value={standing}
                onChange={(e) => setStanding(e.target.value)}
                >
                </input>
                <button className="b" type="submit"> One Team One Winner</button>
            </form>
        </div>
    )
}

export default NewTeamForm;