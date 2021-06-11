import React, { useState } from 'react'
//Import Styles
import './styles/app.scss'
//Import Components
import Player from './components/Player'
import Song from './components/Song'
//Import Util
import data from './util'

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
