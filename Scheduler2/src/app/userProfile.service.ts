import { Injectable } from '@angular/core';
import { UserProfile } from './userProfile';

@Injectable()
export class UserProfileService {

  profile: UserProfile = new UserProfile("Ana", 7);

  constructor() {
  }

  addProfile(profile: UserProfile): void {
    this.profile = profile;
  }

}
