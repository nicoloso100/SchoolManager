import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaAlumnoComponent } from './inserta-alumno.component';

describe('InsertaAlumnoComponent', () => {
  let component: InsertaAlumnoComponent;
  let fixture: ComponentFixture<InsertaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
