import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [customTime, setCustomTime] = useState("");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    if (time > 0) setIsRunning(true);
  };

  const stopTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  const addLap = () => {
    if (time > 0) setLaps([...laps, time]);
  };

  const handleSetTime = () => {
    const timeInSeconds = parseInt(customTime, 10);
    if (!isNaN(timeInSeconds)) {
      setTime(timeInSeconds);
      setCustomTime("");
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-center w-full max-w-md">
      <h1 className="text-4xl font-bold mb-4">{formatTime(time)}</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="number"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          placeholder="Set time in seconds"
          className="flex-1 p-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <button
          onClick={handleSetTime}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Set Time
        </button>
      </div>
      <div className="space-x-4">
        <button
          onClick={startTimer}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Reset
        </button>
        <button
          onClick={addLap}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Lap
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Laps</h2>
        <ul>
          {laps.map((lap, index) => (
            <li key={index} className="text-lg">
              Lap {index + 1}: {formatTime(lap)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timer;