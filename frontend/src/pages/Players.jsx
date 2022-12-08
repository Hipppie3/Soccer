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

      
   
    // const PlayerCards = () => {
    //     return ((player.length > 0) ? player.map((i) => (<PlayerCard key={i.id} players={i}/>)) : <div></div>)
    // }  


    return ( 
      <div>
        <PlayerCard 
        player={player} s
        setPlayer={setPlayer}
        onDeletePlayer={handleDeletePlayers}
        />
      </div>)
    // <>
    //     <NavBar/>
    //     <div class="grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4 bg-indigo-50">
    //         {PlayerCards()}
            
    //     </div>
    // </>)
}

export default Player;