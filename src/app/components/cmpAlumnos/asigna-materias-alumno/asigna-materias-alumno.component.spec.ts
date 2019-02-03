import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaMateriasAlumnoComponent } from './asigna-materias-alumno.component';

describe('AsignaMateriasAlumnoComponent', () => {
  let component: AsignaMateriasAlumnoComponent;
  let fixture: ComponentFixture<AsignaMateriasAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaMateriasAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaMateriasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
