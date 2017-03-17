import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../userProfile.service';
import { UserProfile } from '../userProfile';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  userProfile = new UserProfile("Anastasia", 7);

  constructor(private router: Router, private userProfileService: UserProfileService) { }

  ngOnInit() {
  }

}
