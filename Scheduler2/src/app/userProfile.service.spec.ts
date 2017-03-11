import { TestBed, inject } from '@angular/core/testing';
import { UserProfileService } from './userProfile.service';

describe('UserProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileService]
    });
  });

  it('should ...', inject([UserProfileService], (service: UserProfileService) => {
    expect(service).toBeTruthy();
  }));
});
