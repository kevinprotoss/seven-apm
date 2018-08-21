import { TestBed, inject } from '@angular/core/testing';

import { ColleagueService } from './colleague.service';

describe('ColleagueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColleagueService]
    });
  });

  it('should be created', inject([ColleagueService], (service: ColleagueService) => {
    expect(service).toBeTruthy();
  }));
});
