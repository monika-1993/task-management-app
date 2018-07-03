import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';

import { TaskManagementService } from '../../services/task-management.service';
import { DialogCreateTaskComponent } from './dialog-create-task.component';

describe('DialogCreateTaskComponent', () => {
  let component: DialogCreateTaskComponent;
  let fixture: ComponentFixture<DialogCreateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateTaskComponent],
      imports: [FormsModule, MatDialogModule],
      providers: [
        TaskManagementService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
