import { TestBed, inject } from '@angular/core/testing';

import { PageScrollService } from './page-scroll.service';

describe('PageScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageScrollService]
    });
  });

  it('should be created', inject([PageScrollService], (service: PageScrollService) => {
    expect(service).toBeTruthy();
  }));
});
