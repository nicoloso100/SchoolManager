import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaMateriasProfesorComponent } from './asigna-materias-profesor.component';

describe('AsignaMateriasProfesorComponent', () => {
  let component: AsignaMateriasProfesorComponent;
  let fixture: ComponentFixture<AsignaMateriasProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaMateriasProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaMateriasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
