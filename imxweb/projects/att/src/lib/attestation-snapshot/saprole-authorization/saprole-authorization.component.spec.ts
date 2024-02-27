import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPRoleAuthorizationComponent } from './saprole-authorization.component';

describe('UnitePluginScriptComponent', () => {
  let component: SAPRoleAuthorizationComponent;
  let fixture: ComponentFixture<SAPRoleAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAPRoleAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAPRoleAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
