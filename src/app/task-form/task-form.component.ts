import { Component, TemplateRef } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Task } from "../models/task.model";
import { TaskManagerService } from "../task-manager.service";
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"],
})
export class TaskFormComponent {
  taskForm!: FormGroup;
  taskService: TaskManagerService;

  constructor(taskService: TaskManagerService, private offcanvasService: NgbOffcanvas) {
    this.taskService = taskService;
  }

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
    });
  }

  get title() {
    return this.taskForm.get("title")!;
  }

  openOffCanvas(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.open(content);
  }

  closeOffCanvas(content: TemplateRef<HTMLElement>) {
    this.offcanvasService.dismiss(content);
  }

  onTaskAddHandler(content: TemplateRef<HTMLElement>, event: Event): void {
    if (this.taskForm.valid) {
      this.closeOffCanvas(content);
      this.taskService.add(new Task(this.taskForm.value.title, false));
      this.taskForm.reset();
    }
  }
}
