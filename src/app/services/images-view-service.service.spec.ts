import { TestBed } from '@angular/core/testing';

import { ImagesViewServiceService } from './images-view-service.service';

describe('ImagesViewServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesViewServiceService = TestBed.get(ImagesViewServiceService);
    expect(service).toBeTruthy();
  });
});
