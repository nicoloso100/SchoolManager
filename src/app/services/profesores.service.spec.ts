import { TestBed, inject } from '@angular/core/testing';

import { ProfesoresService } from './profesores.service';

describe('ProfesoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfesoresService]
    });
  });

  it('should be created', inject([ProfesoresService], (service: ProfesoresService) => {
    expect(service).toBeTruthy();
  }));
});
