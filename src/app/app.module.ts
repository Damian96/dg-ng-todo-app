import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskManagerService } from './task-manager.service';
import { TaskComponent } from './task-list/task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { ClassValidatorFormBuilderModule } from 'ngx-reactive-form-class-validator';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ClassValidatorFormBuilderModule.forRoot(),
  ],
  providers: [TaskManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
