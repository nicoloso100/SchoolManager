import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMateriasComponent } from './registro-materias.component';

describe('RegistroMateriasComponent', () => {
  let component: RegistroMateriasComponent;
  let fixture: ComponentFixture<RegistroMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
