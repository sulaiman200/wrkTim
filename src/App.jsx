import React from "react";
import Timer from "./components/Timer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-8">wrkTim</h1>
      <Timer />
      <MusicPlayer />
    </div>
  );
}

export default App;