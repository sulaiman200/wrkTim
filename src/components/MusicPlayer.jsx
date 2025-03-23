import React, { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MusicPlayer = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);

  // Load playlist from localStorage on component mount
  useEffect(() => {
    const savedPlaylist = JSON.parse(localStorage.getItem("playlist")) || [];
    setPlaylist(savedPlaylist);
  }, []);

  // Save playlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    const newPlaylist = [...playlist];
    for (let i = 0; i < files.length; i++) {
      newPlaylist.push({ name: files[i].name, src: URL.createObjectURL(files[i]) });
    }
    setPlaylist(newPlaylist);
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) =>
      prevTrack === 0 ? playlist.length - 1 : prevTrack - 1
    );
  };

  const handleTrackEnd = () => {
    handleNext();
  };

  return (
    <div className="mt-8 w-full max-w-md">
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
          onClickNext={handleNext}
          onClickPrevious={handlePrevious}
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