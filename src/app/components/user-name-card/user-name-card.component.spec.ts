import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameCardComponent } from './user-name-card.component';

describe('UserNameCardComponent', () => {
  let component: UserNameCardComponent;
  let fixture: ComponentFixture<UserNameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
