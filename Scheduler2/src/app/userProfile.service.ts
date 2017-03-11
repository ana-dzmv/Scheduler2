import { Injectable } from '@angular/core';
import { UserProfile } from './userProfile';

@Injectable()
export class UserProfileService {

  profiles: UserProfile[] = [];

  constructor() {
  }

  addProfile(profile: UserProfile): void{
    this.profiles.push(profile);
  }

}
