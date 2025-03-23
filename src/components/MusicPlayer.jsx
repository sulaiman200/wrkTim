import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MusicPlayer = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    const newPlaylist = [...playlist];
    for (let i = 0; i < files.length; i++) {
      newPlaylist.push({ name: files[i].name, src: URL.createObjectURL(files[i]) });
    }
    setPlaylist(newPlaylist);
  };

  const handleTrackEnd = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Workout Playlist</h2>
      <input
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileUpload}
        className="mb-4"
      />
      {playlist.length > 0 && (
        <AudioPlayer
          autoPlay={false}
          src={playlist[currentTrack].src}
          onPlay={(e) => console.log("Playing")}
          onEnded={handleTrackEnd}
          className="bg-gray-800 rounded-lg"
        />
      )}
      <div className="mt-4">
        <h3 className="text-xl font-bold">Playlist</h3>
        <ul>
          {playlist.map((track, index) => (
            <li
              key={index}
              className={`text-lg ${
                index === currentTrack ? "text-blue-500" : "text-white"
              }`}
            >
              {track.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicPlayer;