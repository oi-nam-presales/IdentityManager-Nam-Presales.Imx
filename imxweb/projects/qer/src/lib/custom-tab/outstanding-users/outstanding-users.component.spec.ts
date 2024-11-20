import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingUsersComponent } from './outstanding-users.component';

describe('OutstandingUsersComponent', () => {
  let component: OutstandingUsersComponent;
  let fixture: ComponentFixture<OutstandingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
