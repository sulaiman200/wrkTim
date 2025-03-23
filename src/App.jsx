import React from "react";
import Timer from "./components/Timer";
import MusicPlayer from "./components/MusicPlayer";
import RoutineTracker from "./components/RoutineTracker";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-8">wrkTim</h1>
      <Timer />
      <MusicPlayer />
      <RoutineTracker />
      <ProgressTracker />
    </div>
  );
}

export default App;