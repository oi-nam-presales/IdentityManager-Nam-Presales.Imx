import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePluginDemoComponent } from './sample-plugin-demo.component';

describe('SamplePluginDemoComponent', () => {
  let component: SamplePluginDemoComponent;
  let fixture: ComponentFixture<SamplePluginDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePluginDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePluginDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
