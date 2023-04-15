import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasperReportComponent } from './jasper-report.component';

describe('JasperReportComponent', () => {
  let component: JasperReportComponent;
  let fixture: ComponentFixture<JasperReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasperReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasperReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
