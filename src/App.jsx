import React from "react";
import Timer from "./components/Timer";
import MusicPlayer from "./components/MusicPlayer";
import RoutineTracker from "./components/RoutineTracker";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          wrkTim
        </h1>
        <Timer />
        <MusicPlayer />
        <RoutineTracker />
        <ProgressTracker />
      </div>
    </div>
  );
}

export default App;