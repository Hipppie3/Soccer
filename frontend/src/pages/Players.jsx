import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import PlayerCard from "./PlayerCard";

const Player = () => {
    const [player, setPlayer] = useState([]);
    
    // const currentUser = useContext(UserContext)
    
    

    useEffect(() => {
        fetch("/api/players").then((r) => {
          if (r.ok) {
            r.json().then((player) => setPlayer(player));
          }
        });
      }, []);

    function handleDeletePlayers(playerDelete) {
      const removePlayer = player.filter(
        (p) => p.id !== playerDelete.id
      );
      setPlayer(removePlayer)
    }

    function handlePosition(updatedPosition) {
      setPlayer((player) =>
          player.map((playerPos) => {
          return playerPos.id === updatedPosition.id ? updatedPosition : playerPos;
      })
      );
  }
    return ( 
      <div>
        <PlayerCard 
        handleDeletePlayers={handleDeletePlayers}
        player={player} 
        setPlayer={setPlayer}
        handlePosition= {handlePosition}
        />
      </div>
    )
}

export default Player;