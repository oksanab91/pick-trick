import { TestBed, inject } from '@angular/core/testing';

import { CompareCartService } from './compare-cart.service';

describe('CompareCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompareCartService]
    });
  });

  it('should be created', inject([CompareCartService], (service: CompareCartService) => {
    expect(service).toBeTruthy();
  }));
});
