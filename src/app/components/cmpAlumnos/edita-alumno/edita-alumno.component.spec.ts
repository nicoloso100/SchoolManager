import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAlumnoComponent } from './edita-alumno.component';

describe('EditaAlumnoComponent', () => {
  let component: EditaAlumnoComponent;
  let fixture: ComponentFixture<EditaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
