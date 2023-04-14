import { Injectable, NgZone } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private incompleteTasks: Task[] = [
    new Task('Sample Task 1', false),
    new Task('Sample Task 2', false),
  ];
  private completedTasks: Task[] = [new Task('Sample Task 2', true)];

  constructor(private ngZone: NgZone) {}

  /**
   * Custom-made searching fn, instead of Array.prototype.findIndex
   * @param haystack
   * @param needle
   * @returns The index of the needle
   */
  private findTaskById(haystack: Task[], needle: Task): number {
    return haystack.findIndex((task, index) => {
      return task.id === needle.id;
    });
  }

  add(task: Task): void {
    this.incompleteTasks.push(task);
  }

  delete(task: Task): void {
    const index = this.findTaskById(this.incompleteTasks, task);
    if (index >= 0) {
      this.incompleteTasks.splice(index, 1);
    }

    const completedIndex = this.completedTasks.indexOf(task);
    if (completedIndex >= 0) {
      this.completedTasks.splice(completedIndex, 1);
    }
  }

  markComplete(task: Task): void {
    task.completed = true;

    const index = this.findTaskById(this.incompleteTasks, task);
    if (index >= 0) {
      this.incompleteTasks.splice(index, 1);
      this.completedTasks.push(task);
    }

    // Trigger change detection
    this.ngZone.run(() => {});
  }

  markInComplete(task: Task): void {
    task.completed = false;

    const index = this.findTaskById(this.completedTasks, task);
    if (index >= 0) {
      this.completedTasks.splice(index, 1);
      this.incompleteTasks.push(task);
    }

    // Trigger change detection
    this.ngZone.run(() => {});
  }

  getIncompleteTasks(): Task[] {
    return this.incompleteTasks;
  }

  getCompletedTasks(): Task[] {
    return this.completedTasks;
  }

  toggleTaskComplete(task: Task) {
    if (task.completed) {
      this.markInComplete(task);
    } else {
      this.markComplete(task);
    }
  }
}
