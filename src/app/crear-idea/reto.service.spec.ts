import { TestBed } from '@angular/core/testing';

import { RetoService } from './reto.service';

describe('RetoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetoService = TestBed.get(RetoService);
    expect(service).toBeTruthy();
  });
});
