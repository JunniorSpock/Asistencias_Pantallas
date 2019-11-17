import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesDiaComponent } from './reportes-dia.component';

describe('ReportesDiaComponent', () => {
  let component: ReportesDiaComponent;
  let fixture: ComponentFixture<ReportesDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
