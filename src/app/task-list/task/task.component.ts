import { Component, Input } from '@angular/core';
import { TaskManagerService } from 'src/app/task-manager.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input()
  id: number | undefined;

  @Input()
  title: string = '';

  @Input()
  completed: boolean = false;

  constructor() {}
}
