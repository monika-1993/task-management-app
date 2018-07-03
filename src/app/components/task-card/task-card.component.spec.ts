import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatSelectModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule
} from '@angular/material';
import { DragDropDirectiveModule } from 'angular4-drag-drop';

import { TaskManagementService } from '../../services/task-management.service';
import { TaskCardComponent } from './task-card.component';

describe('TaskCardComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCardComponent, TestHostComponent],
      imports: [
        MatSelectModule,
        MatCardModule,
        MatChipsModule,
        DragDropDirectiveModule,
        FormsModule,
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
    expect(component.taskCardComponent).toBeTruthy();
  });
});

@Component({
  selector: `app-host-component`,
  template: `<app-task-card [task]="task"></app-task-card>`
})
class TestHostComponent {
  @ViewChild(TaskCardComponent)
  public taskCardComponent: TaskCardComponent;
  public task = {
    title: 'test',
    description: 'test des',
    status: 1,
    userAssigned: 1
  };
}
