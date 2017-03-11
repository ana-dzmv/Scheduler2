import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../userProfile';
import { UserProfileService } from '../userProfile.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  profile: UserProfile = new UserProfile();

  constructor(private router: Router, private userProfileService: UserProfileService) { }

  ngOnInit() {
  }

  submit() {
    this.userProfileService.addProfile(this.profile);
    this.profile = new UserProfile();
    this.router.navigate(['index']);
  }

}
