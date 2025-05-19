import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TASK_SERVICE } from "./services/task.service";
import "reflect-metadata";
import { Task } from "./types/task";
import { ITaskService } from "./services/task.service";
import { container } from "./container";

function App() {
  const taskService = container.get<ITaskService>(TASK_SERVICE);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskCreated = () => {
    setTasks(taskService.getTasks());
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
