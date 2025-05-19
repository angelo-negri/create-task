import { injectable } from "inversify";
import { Task } from "../types/task";

export const TASK_SERVICE = Symbol("TaskService");

export interface ITaskService {
  createTask(title: string): void;
  getTasks(): Task[];
}

@injectable()
export class TaskService implements ITaskService {
  private tasks: Task[] = [];

  createTask(title: string) {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      createdAt: new Date(),
    };

    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }
}
