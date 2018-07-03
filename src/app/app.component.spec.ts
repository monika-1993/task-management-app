import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropDirectiveModule } from 'angular4-drag-drop';
import {
  MatDialogModule, MatInputModule, MatCardModule, MatSelectModule,
  MatChipsModule, MatGridListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async } from '@angular/core/testing';


import { TaskManagementService } from './services/task-management.service';
import { UserTaskListComponent } from './components/user-task-list/user-task-list.component';
import { UserNameCardComponent } from './components/user-name-card/user-name-card.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogViewTaskComponent } from './components/dialog-view-task/dialog-view-task.component';
import { DialogCreateTaskComponent } from './components/dialog-create-task/dialog-create-task.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserTaskListComponent,
        UserNameCardComponent,
        TaskBoardComponent,
        UserTaskListComponent,
        UserNameCardComponent,
        HeaderComponent,
        TaskCardComponent,
        DialogCreateTaskComponent,
        DialogViewTaskComponent
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
      providers: [TaskManagementService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Publishing');
  }));
});
