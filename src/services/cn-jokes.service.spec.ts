import { TestBed, inject } from '@angular/core/testing';

import { CnJokesService } from './cn-jokes.service';

describe('CnJokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnJokesService]
    });
  });

  it('should be created', inject([CnJokesService], (service: CnJokesService) => {
    expect(service).toBeTruthy();
  }));
});
