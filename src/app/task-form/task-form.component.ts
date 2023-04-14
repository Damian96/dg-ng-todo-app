import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  taskForm!: FormGroup;
  taskService: TaskManagerService;

  constructor(taskService: TaskManagerService) {
    this.taskService = taskService;
  }

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ]),
    });
  }

  get title() {
    return this.taskForm.get('title')!;
  }

  onTaskAddHandler(event: Event): void {
    // console.log(this.taskForm, event);

    if (this.taskForm.valid) {
      this.taskService.add(new Task(this.taskForm.value.title, false));
    }
  }
}
