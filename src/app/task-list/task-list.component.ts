import { Component } from '@angular/core';
import { TaskManagerService } from '../task-manager.service';
import { Task } from '../models/task.model';
import { DndDropEvent } from 'ngx-drag-drop';
import * as $ from 'jquery';

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
  onDragStart(event: DragEvent) {
    console.log(event);

    if ($(event.target!).closest('.completed-list').length > 0) {
      $('.incompleted-list').addClass('border-dashed');
    } else if ($(event.target!).closest('.incompleted-list').length > 0) {
      $('.completed-list').addClass('border-dashed');
    }
  }

  onDragover(event: DragEvent) {}

  onDragEnd(event: DragEvent) {
    $('.incompleted-list, .completed-list').removeClass('border-dashed');
  }

  onDrop(event: DndDropEvent) {
    // console.log(event);
    const task = event.data as Task;

    if ($(event.event.target!).closest('.completed-list').length > 0) {
      this.taskService.markComplete(task);
    } else if ($(event.event.target!).closest('.incompleted-list').length > 0) {
      this.taskService.markInComplete(task);
    }

    $('.incompleted-list, .completed-list').removeClass('border-dashed');
  }
}
