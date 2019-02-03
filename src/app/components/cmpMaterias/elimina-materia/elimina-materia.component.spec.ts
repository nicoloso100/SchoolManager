import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaMateriaComponent } from './elimina-materia.component';

describe('EliminaMateriaComponent', () => {
  let component: EliminaMateriaComponent;
  let fixture: ComponentFixture<EliminaMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
