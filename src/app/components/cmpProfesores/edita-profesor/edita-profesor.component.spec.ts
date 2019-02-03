import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaProfesorComponent } from './edita-profesor.component';

describe('EditaProfesorComponent', () => {
  let component: EditaProfesorComponent;
  let fixture: ComponentFixture<EditaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
