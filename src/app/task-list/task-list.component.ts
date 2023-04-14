import { Component } from '@angular/core';
import { TaskManagerService } from '../task-manager.service';
import { Task } from '../models/task.model';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  private taskService: TaskManagerService;

  draggable = {
    effectAllowed: 'all',
    disable: false,
    handle: true,
  };

  constructor(taskService: TaskManagerService) {
    this.taskService = taskService;
  }

  get tasks(): Task[] {
    return Array.prototype.concat(this.incompleteTasks, this.completedTasks);
  }

  get incompleteTasks(): Task[] {
    return this.taskService.getIncompleteTasks();
  }

  get completedTasks(): Task[] {
    return this.taskService.getCompletedTasks();
  }

  markTaskComplete(task: Task): void {
    this.taskService.markComplete(task);
  }

  /* Drag and Drop */
  onDragover(event: DragEvent) {}

  onDrop(event: DndDropEvent) {
    console.log(event);

    const task = event.data as Task;
    this.taskService.toggleTaskComplete(task);
  }
}
