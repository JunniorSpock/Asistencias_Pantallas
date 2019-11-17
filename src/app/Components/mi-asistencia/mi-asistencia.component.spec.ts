import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiAsistenciaComponent } from './mi-asistencia.component';

describe('MiAsistenciaComponent', () => {
  let component: MiAsistenciaComponent;
  let fixture: ComponentFixture<MiAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
