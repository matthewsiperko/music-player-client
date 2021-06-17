import React from 'react'

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {
    //Event Handlers
    const songSelectHandler = async () => {
      await setCurrentSong(song)
        //Check if song is playing
        if(isPlaying) audioRef.current.play()
    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong