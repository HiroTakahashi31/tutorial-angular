import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDialogSummaryComponent } from './demo-dialog-summary.component';

describe('DemoDialogSummaryComponent', () => {
  let component: DemoDialogSummaryComponent;
  let fixture: ComponentFixture<DemoDialogSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDialogSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDialogSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
