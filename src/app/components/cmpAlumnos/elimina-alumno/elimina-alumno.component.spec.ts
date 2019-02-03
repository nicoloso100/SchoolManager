import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaAlumnoComponent } from './elimina-alumno.component';

describe('EliminaAlumnoComponent', () => {
  let component: EliminaAlumnoComponent;
  let fixture: ComponentFixture<EliminaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
