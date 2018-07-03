import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatCardModule,
  MatSelectModule,
  MatChipsModule,
  MatDialogModule
} from '@angular/material';
import { DragDropDirectiveModule } from 'angular4-drag-drop';
import { ViewChild, Component } from '@angular/core';

import { TaskManagementService } from './../../services/task-management.service';
import { UserTaskListComponent } from './user-task-list.component';
import { UserNameCardComponent } from '../user-name-card/user-name-card.component';
import { TaskCardComponent } from '../task-card/task-card.component';

describe('UserTaskListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:
        [UserTaskListComponent,
          UserNameCardComponent,
          TaskCardComponent,
          TestHostComponent],
      imports: [
        MatCardModule,
        DragDropDirectiveModule,
        FormsModule,
        MatSelectModule,
        MatChipsModule,
        MatDialogModule

      ],
      providers: [TaskManagementService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component.userTaskListComponent).toBeTruthy();
  });
});

@Component({
  selector: `app-host-component`,
  template: `<app-user-task-list [user]="user"></app-user-task-list>`
})
class TestHostComponent {
  @ViewChild(UserTaskListComponent)
  public userTaskListComponent: UserTaskListComponent;
  public user = {
    name: '',
    id: 2
  };
}
