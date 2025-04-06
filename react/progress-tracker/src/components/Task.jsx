import { useState, useEffect } from "react";
import Progress from "./Progress";

const Task = ({ task }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedProgress = localStorage.getItem(`task-${task.id}`);
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
    }
  }, [task.id]);

  const handleProgressChange = (e) => {
    const value = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
    setProgress(value);
    localStorage.setItem(`task-${task.id}`, value.toString());
  };

  return (
    <div className="p-4 border border-gray-400 rounded-lg mb-4">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold text-center">{task.title}</h3>
        <div className="w-full space-y-3">
          <div className="flex justify-center">
            <input
              type="number"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-20 px-2 py-1 border rounded text-center"
            />
          </div>
          <Progress value={progress} />
        </div>
      </div>
    </div>
  );
};

export default Task;
