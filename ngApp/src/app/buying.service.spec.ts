import { TestBed } from '@angular/core/testing';

import { BuyingService } from './buying.service';

describe('BuyingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyingService = TestBed.get(BuyingService);
    expect(service).toBeTruthy();
  });
});
