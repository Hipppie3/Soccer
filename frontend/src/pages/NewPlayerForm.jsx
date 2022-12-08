import React, { useEffect, useState }  from "react";

function NewPlayerForm({player, setPlayer}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [position, setPosition] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [goals, setGoals] = useState("");

    function handleSumbit(e) {
        e.preventDefault();

        fetch("http:/api/players", {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },
            body: JSON.stringify({
                name: name,
                image: image,
                position: position,
                age: age,
                country: country,
                goals: goals,
            }),
        })
        .then((r) => r.json())
        .then((newplayer) => {
            setPlayer([...player, newplayer])
        });
        setName("");
        setImage("");
        setPosition("");
        setAge("");
        setCountry("");
        setGoals("");
    }

    return (
        <div>
            
            <form onSubmit={handleSumbit}>
                <h3 className="create"> Create the Best Player!</h3>
                <input
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
                </input>
                <input
                placeholder="Image"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                >
                </input>
                <input
                placeholder="Position"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                >
                </input>
                <input
                placeholder="Age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                >
                </input>
                <input
                placeholder="Country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                >
                </input>
                <input
                placeholder="Goals"
                name="goals"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                >
                </input>
                <button className="b" type="submit"> ADD IN ME COACH!</button>
            </form>
        </div>
    )
}
export default NewPlayerForm;