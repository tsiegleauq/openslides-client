import { TestBed } from '@angular/core/testing';

import { BarActionsService } from './bar-actions.service';

describe('BarActionsService', () => {
  let service: BarActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
