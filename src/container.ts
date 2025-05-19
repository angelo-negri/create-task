import { Container } from 'inversify';
import { TASK_SERVICE, TaskService } from './services/task.service';

const container = new Container();
container.bind(TASK_SERVICE).to(TaskService).inSingletonScope();

export { container }; 