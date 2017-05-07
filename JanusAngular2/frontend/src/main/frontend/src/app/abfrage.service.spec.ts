/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbfrageService } from './abfrage.service';

describe('AbfrageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbfrageService]
    });
  });

  it('should ...', inject([AbfrageService], (service: AbfrageService) => {
    expect(service).toBeTruthy();
  }));
});
