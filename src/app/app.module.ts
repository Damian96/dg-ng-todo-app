import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DndModule } from 'ngx-drag-drop';
import { AppComponent } from './app.component';
import { TaskManagerService } from './task-manager.service';
import { TaskListComponent } from './task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskComponent } from './task-list/task/task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DndModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [TaskManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
