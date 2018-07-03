import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatChipsModule,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material';

import { DialogViewTaskComponent } from './dialog-view-task.component';

describe('DialogViewTaskComponent', () => {
  let component: DialogViewTaskComponent;
  let fixture: ComponentFixture<DialogViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogViewTaskComponent],
      imports: [MatChipsModule, MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
