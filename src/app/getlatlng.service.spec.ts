import { TestBed } from '@angular/core/testing';

import { GetlatlngService } from './getlatlng.service';

describe('GetlatlngService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetlatlngService = TestBed.get(GetlatlngService);
    expect(service).toBeTruthy();
  });
});
