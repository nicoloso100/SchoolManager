import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaProfesorComponent } from './elimina-profesor.component';

describe('EliminaProfesorComponent', () => {
  let component: EliminaProfesorComponent;
  let fixture: ComponentFixture<EliminaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
