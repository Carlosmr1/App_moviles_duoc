import { TestBed } from '@angular/core/testing';

import { GuardinhoGuard } from './guardinho.guard';

describe('GuardinhoGuard', () => {
  let guard: GuardinhoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardinhoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
