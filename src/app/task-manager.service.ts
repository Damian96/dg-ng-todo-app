import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private tasks: Task[] = [];

  constructor() {}

  add(task: Task): void {
    this.tasks.push(task);
  }

  delete(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  markComplete(task: Task): void {
    task.completed = true;
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
