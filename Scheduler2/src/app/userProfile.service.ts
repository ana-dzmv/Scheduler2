import { Injectable } from '@angular/core';
import { UserProfile } from './userProfile';

@Injectable()
export class UserProfileService {

  profiles: UserProfile[] = [];

  constructor() {
  }

  setProfile(profile: UserProfile): void {
    profile = new UserProfile("Anastasia", 5);
    this.profiles.push(profile);
  }

}
