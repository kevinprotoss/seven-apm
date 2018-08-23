import { TestBed, inject } from '@angular/core/testing';

import { MajorService } from './major.service';

describe('MajorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorService]
    });
  });

  it('should be created', inject([MajorService], (service: MajorService) => {
    expect(service).toBeTruthy();
  }));
});
