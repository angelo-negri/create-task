import { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => (
  <li key={task.id} className="task-item">
    <span className="task-title">{task.title}</span>
    <span className="task-date">{task.createdAt.toLocaleDateString()}</span>
  </li>
);
