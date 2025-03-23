import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(0);
    setLaps([]);
  };
  const addLap = () => setLaps([...laps, time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{formatTime(time)}</h1>
      <div className="space-x-4">
        <button
          onClick={startTimer}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
        <button
          onClick={addLap}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
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