import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPAuthObjectTransactionsComponent } from './sapauthobject-transactions.component';

describe('UnitePluginScriptComponent', () => {
  let component: SAPAuthObjectTransactionsComponent;
  let fixture: ComponentFixture<SAPAuthObjectTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAPAuthObjectTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAPAuthObjectTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
