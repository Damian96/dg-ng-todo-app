import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskManagerService } from 'src/app/task-manager.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  taskService: TaskManagerService;

  draggable = {
    effectAllowed: 'all',
    disable: false,
    handle: true,
  };

  constructor(taskService: TaskManagerService) {
    this.taskService = taskService;
  }

  deleteTask(task: Task): void {
    this.taskService.delete(task);
  }

  toggleTaskComplete(task: Task): void {
    this.taskService.toggleTaskComplete(task);
  }
}
