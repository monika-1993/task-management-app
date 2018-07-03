import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatSelectModule, MatDialogModule,
  MatChipsModule, MatGridListModule
} from '@angular/material';
import { DragDropDirectiveModule } from 'angular4-drag-drop';

import { TaskCardComponent } from './../task-card/task-card.component';
import { TaskBoardComponent } from './task-board.component';
import { UserTaskListComponent } from './../user-task-list/user-task-list.component';
import { UserNameCardComponent } from './../user-name-card/user-name-card.component';
import { TaskManagementService } from './../../services/task-management.service';

describe('TaskBoardComponent', () => {
  let component: TaskBoardComponent;
  let fixture: ComponentFixture<TaskBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:
        [TaskBoardComponent,
          UserTaskListComponent,
          UserNameCardComponent,
          TaskCardComponent],
      imports:
        [MatGridListModule,
          DragDropDirectiveModule,
          FormsModule,
          MatSelectModule,
          MatChipsModule,
          MatDialogModule],
      providers: [TaskManagementService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
