import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePluginMessageComponent } from './sample-plugin-message.component';

describe('SamplePluginMessageComponent', () => {
  let component: SamplePluginMessageComponent;
  let fixture: ComponentFixture<SamplePluginMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePluginMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePluginMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
