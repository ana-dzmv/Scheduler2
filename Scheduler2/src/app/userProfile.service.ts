import { Injectable } from '@angular/core';
import { UserProfile } from './userProfile';

@Injectable()
export class UserProfileService {

  profile: UserProfile[] = [];

  constructor() {
  }

  addProfile(profile: UserProfile): void{
    this.profile.push(profile);
  }

}
