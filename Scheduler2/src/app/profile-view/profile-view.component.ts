import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../userProfile.service';
import { UserProfile } from '../userProfile';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  userProfiles: UserProfile[];

  // Subject information
  subjects: Subject[];

  constructor(private router: Router, private UserProfileService: UserProfileService, private SubjectService: SubjectService) {
    this.userProfiles = this.UserProfileService.profiles;
    this.subjects = this.SubjectService.subjects;
  }

  ngOnInit() {
  }

  deleteTask(subject: Subject){
    this.SubjectService.deleteSubject(subject);
  }

}
