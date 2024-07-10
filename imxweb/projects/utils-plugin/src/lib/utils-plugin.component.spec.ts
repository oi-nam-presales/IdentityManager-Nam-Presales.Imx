import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsPluginComponent } from './utils-plugin.component';

describe('UnitePluginComponent', () => {
  let component: UtilsPluginComponent;
  let fixture: ComponentFixture<UtilsPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilsPluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilsPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
