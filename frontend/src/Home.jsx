import {useState,useEffect} from 'react'
import './index.css'
import song from '../public/song.mp3'


function Home({ user }) {
  const audioTune = new Audio(song);
  const [playInLoop, setPlayInLoop] = useState(false);
  useEffect(() => {
  audioTune.load();
}, [])
  useEffect(() => {
  audioTune.loop = playInLoop;
}, [playInLoop])

const playSound = () => {
  audioTune.play();
}

// stop audio sound
const stopSound = () => {
  audioTune.pause();
  audioTune.currentTime = 0;
}
  if (user) {
    return (
    <div >
    </div>)
  } else {
    return (
    <div className="homie">
      <div>
      Login,  Signup,  or  SHUT UP!
      </div>
      <h1 className="what">

      <input type="button" className="btn btn-primary mr-2" value="??" onClick={playSound}></input>
      <input type="button" className="btn btn-danger mr-2" value="." onClick={stopSound}></input>
      </h1>
    </div>)
  }
}

export default Home;



      // <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound}></input>
      // <input type="button" className="btn btn-danger mr-2" value="Stop" onClick={stopSound}></input>