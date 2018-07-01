import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewTaskComponent } from './dialog-view-task.component';

describe('DialogViewTaskComponent', () => {
  let component: DialogViewTaskComponent;
  let fixture: ComponentFixture<DialogViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogViewTaskComponent ]
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
