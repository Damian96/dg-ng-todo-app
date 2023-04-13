import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  taskForm!: FormGroup;

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl(Task.name, [
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

  }
}
