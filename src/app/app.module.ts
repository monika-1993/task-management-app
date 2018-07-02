import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropDirectiveModule} from 'angular4-drag-drop';

import {
  MatDialogModule, MatInputModule, MatCardModule, MatSelectModule,
  MatChipsModule, MatGridListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogCreateTaskComponent } from './components/dialog-create-task/dialog-create-task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { UserNameCardComponent } from './components/user-name-card/user-name-card.component';
import { UserTaskListComponent } from './components/user-task-list/user-task-list.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogViewTaskComponent } from './components/dialog-view-task/dialog-view-task.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { TaskManagementService } from './services/task-management.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogCreateTaskComponent,
    TaskCardComponent,
    UserNameCardComponent,
    UserTaskListComponent,
    HeaderComponent,
    DialogViewTaskComponent,
    TaskBoardComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    MatGridListModule,
    FormsModule,
    DragDropDirectiveModule
  ],
  providers: [TaskManagementService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogCreateTaskComponent
  ]
})
export class AppModule { }
