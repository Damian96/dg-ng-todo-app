import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  public tasks: TaskComponent[] = [];
  private taskService: TaskManagerService;

  constructor(taskService: TaskManagerService) {
    this.taskService = taskService;
    this.tasks = this.taskService.getTasks();
  }
}
