import React, { useState } from "react";

const ProgressTracker = () => {
  const [progress, setProgress] = useState([]);
  const [newProgress, setNewProgress] = useState("");

  const addProgress = () => {
    if (newProgress.trim()) {
      setProgress([...progress, { date: new Date().toLocaleDateString(), note: newProgress }]);
      setNewProgress("");
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Workout Progress</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newProgress}
          onChange={(e) => setNewProgress(e.target.value)}
          placeholder="Add a progress note"
          className="flex-1 p-2 border border-gray-600 rounded bg-gray-800 text-white"
        />
        <button
          onClick={addProgress}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {progress.map((entry, index) => (
          <li key={index} className="text-lg">
            <span className="font-bold">{entry.date}:</span> {entry.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;