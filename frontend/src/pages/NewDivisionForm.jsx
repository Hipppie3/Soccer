import React, { useEffect, useState }  from "react";

function NewDivisionForm({division, setDivision}) {
    const [name, setName] = useState("");
    const [logo, setLogo] = useState("");
    const [mp, setMp] = useState("");
    const [won, setWon] = useState("");
    const [draw, setDraw] = useState("");
    const [lost, setLost] = useState("");
    const [points, setPoints] = useState("");


    function handleSumbit(e) {
        e.preventDefault();

        fetch("http:/api/divisions", {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({
                name: name,
                logo: logo,
                mp: mp,
                won: won,
                draw: draw,
                lost: lost,
                points: points,
            }),
        })
        .then((r) => r.json())
        .then((newdivision) => {
            setDivision([...division, newdivision])
        });
        setName("");
        setLogo("");
        setMp("");
        setWon("");
        setDraw("");
        setLost("");
        setPoints("");
    }

    return (
        <div>
            
            <form onSubmit={handleSumbit}>
                <h3 className="create"> Create A Team In the League!</h3>
                <input
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
                </input>
                <input
                placeholder="Logo"
                name="Logo"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                >
                </input>
                <input
                placeholder="Mp"
                name="Mp"
                value={mp}
                onChange={(e) => setMp(e.target.value)}
                >
                </input>
                <input
                placeholder="Won"
                name="Won"
                value={won}
                onChange={(e) => setWon(e.target.value)}
                >
                </input>
                <input
                placeholder="Draw"
                name="Draw"
                value={draw}
                onChange={(e) => setDraw(e.target.value)}
                >
                </input>
                <input
                placeholder="Lost"
                name="Lost"
                value={lost}
                onChange={(e) => setLost(e.target.value)}
                >
                </input>
                <input
                placeholder="Points"
                name="Points"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                >
                </input>
                <button className="b" type="submit"> Enter Division!</button>
            </form>
        </div>
    )
}
export default NewDivisionForm;