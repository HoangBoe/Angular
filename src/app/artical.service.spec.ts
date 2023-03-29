import { TestBed } from '@angular/core/testing';

import { ArticalService } from './article.service';

describe('ArticalService', () => {
  let service: ArticalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
