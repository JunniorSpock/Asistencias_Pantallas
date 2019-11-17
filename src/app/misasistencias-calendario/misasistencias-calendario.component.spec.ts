import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisasistenciasCalendarioComponent } from './misasistencias-calendario.component';

describe('MisasistenciasCalendarioComponent', () => {
  let component: MisasistenciasCalendarioComponent;
  let fixture: ComponentFixture<MisasistenciasCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisasistenciasCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisasistenciasCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
