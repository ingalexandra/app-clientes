import { TestBed } from '@angular/core/testing';

import { ApiClienteService } from './api-cliente.service';

describe('ApiClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiClienteService = TestBed.get(ApiClienteService);
    expect(service).toBeTruthy();
  });
});
