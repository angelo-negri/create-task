import React, { useState } from "react";
import { container } from "../container";
import { TASK_SERVICE, ITaskService } from "../services/task.service";

interface TaskFormProps {
  onTaskCreated: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const taskService = container.get<ITaskService>(TASK_SERVICE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      taskService.createTask(title.trim());
      onTaskCreated();
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="task-input"
      />
      <button type="submit" className="task-button">
        Create Task
      </button>
    </form>
  );
};
