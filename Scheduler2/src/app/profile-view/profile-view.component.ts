import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../userProfile';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  userProfile = new UserProfile();

  constructor() { }

  ngOnInit() {
  }

}
