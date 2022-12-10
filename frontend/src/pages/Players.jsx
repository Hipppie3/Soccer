import React, {useEffect, useState}  from "react";
// import { UserContext } from "../context/context";
// import NavBar from "./NavBar";
import PlayerCard from "./PlayerCard";
import PlayerSearch from "./PlayerSearch"

const Player = () => {
    const [player, setPlayer] = useState([]);
    const [searchPlayer, setSearchPlayer] = useState("")
    
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
      )};
   
     const showPlayer = player.filter((t) => {
        return t.name.toLowerCase().includes(searchPlayer.toLowerCase())
      })



    return ( 
      
      <div>
        <PlayerSearch searchPlayer={searchPlayer} onSearchPlayer={setSearchPlayer}/>
        <PlayerCard 
        player={showPlayer} 
        setPlayer={setPlayer}
        handlePosition={handlePosition}
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