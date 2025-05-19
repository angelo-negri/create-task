import React from "react";
import { TaskItem } from "./TaskItem";
import { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
  <div className="task-list">
    <h2>Tasks</h2>
    {tasks.length === 0 ? (
      <p>No tasks yet. Create one above!</p>
    ) : (
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    )}
  </div>
);
