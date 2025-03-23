import React, { useState, useEffect } from "react";

const RoutineTracker = () => {
  const [routines, setRoutines] = useState([]);
  const [newRoutine, setNewRoutine] = useState("");

  // Load routines from localStorage on component mount
  useEffect(() => {
    const savedRoutines = JSON.parse(localStorage.getItem("routines")) || [];
    setRoutines(savedRoutines);
  }, []);

  // Save routines to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("routines", JSON.stringify(routines));
  }, [routines]);

  const addRoutine = () => {
    if (newRoutine.trim()) {
      const updatedRoutines = [...routines, { name: newRoutine, completed: false }];
      setRoutines(updatedRoutines);
      setNewRoutine("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedRoutines = [...routines];
    updatedRoutines[index].completed = !updatedRoutines[index].completed;
    setRoutines(updatedRoutines);
  };

  return (
    <div className="mt-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Workout Routines</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newRoutine}
          onChange={(e) => setNewRoutine(e.target.value)}
          placeholder="Add a new routine"
          className="flex-1 p-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <button
          onClick={addRoutine}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {routines.map((routine, index) => (
          <li key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={routine.completed}
              onChange={() => toggleCompletion(index)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span
              className={`text-lg ${
                routine.completed ? "line-through text-gray-500" : "text-white"
              }`}
            >
              {routine.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoutineTracker;