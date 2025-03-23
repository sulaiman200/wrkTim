import React, { useState, useEffect } from "react";

const Timer = () => {
  const [workTime, setWorkTime] = useState(0); // Workout time in seconds
  const [restTime, setRestTime] = useState(0); // Rest time in seconds
  const [reps, setReps] = useState(0); // Number of reps
  const [timeLeft, setTimeLeft] = useState(0); // Time left in the current phase (work or rest)
  const [isRunning, setIsRunning] = useState(false); // Timer running state
  const [isWorkPhase, setIsWorkPhase] = useState(true); // True for work phase, false for rest phase
  const [currentRep, setCurrentRep] = useState(1); // Current rep number

  // Handle timer countdown
  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      // Switch between work and rest phases
      if (isWorkPhase) {
        // Switch to rest phase
        setIsWorkPhase(false);
        setTimeLeft(restTime);
      } else {
        // Switch to work phase and decrease reps
        setIsWorkPhase(true);
        setTimeLeft(workTime);
        setCurrentRep((prevRep) => prevRep + 1);
        if (currentRep >= reps) {
          // Stop timer if all reps are done
          setIsRunning(false);
        }
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isWorkPhase, workTime, restTime, reps, currentRep]);

  // Start the timer
  const startTimer = () => {
    if (workTime > 0 && restTime > 0 && reps > 0) {
      setTimeLeft(workTime);
      setIsRunning(true);
      setIsWorkPhase(true);
      setCurrentRep(1);
    }
  };

  // Stop the timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setWorkTime(0);
    setRestTime(0);
    setReps(0);
    setTimeLeft(0);
    setCurrentRep(1);
  };

  // Format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-center w-full max-w-md">
      <h1 className="text-4xl font-bold mb-4">
        {isWorkPhase ? "Work Time" : "Rest Time"}
      </h1>
      <h2 className="text-3xl font-bold mb-4">{formatTime(timeLeft)}</h2>
      <div className="mb-4">
        <p className="text-lg">
          Rep {currentRep} of {reps}
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="number"
            value={workTime}
            onChange={(e) => setWorkTime(parseInt(e.target.value, 10))}
            placeholder="Work Time (seconds)"
            className="flex-1 p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="number"
            value={restTime}
            onChange={(e) => setRestTime(parseInt(e.target.value, 10))}
            placeholder="Rest Time (seconds)"
            className="flex-1 p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(parseInt(e.target.value, 10))}
            placeholder="Number of Reps"
            className="flex-1 p-2 border border-gray-600 rounded bg-gray-800 text-white"
          />
        </div>
      </div>
      <div className="mt-4 space-x-4">
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
      </div>
    </div>
  );
};

export default Timer;