import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MusicPlayer = () => {
  const playlist = [
    { name: "Song 1", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Song 2", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Workout Playlist</h2>
      <AudioPlayer
        autoPlay={false}
        src={playlist[0].src}
        onPlay={(e) => console.log("Playing")}
        className="bg-gray-800 rounded-lg"
      />
    </div>
  );
};

export default MusicPlayer;