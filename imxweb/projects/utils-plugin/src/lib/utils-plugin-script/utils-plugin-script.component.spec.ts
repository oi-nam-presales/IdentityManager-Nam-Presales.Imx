import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsPluginScriptComponent } from './utils-plugin-script.component';

describe('UnitePluginScriptComponent', () => {
  let component: UtilsPluginScriptComponent;
  let fixture: ComponentFixture<UtilsPluginScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilsPluginScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilsPluginScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
