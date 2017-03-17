import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.css']
})
export class NewSubjectComponent implements OnInit {

  subject: Subject = new Subject();

  constructor(private router: Router, private subjectService: SubjectService) { }

  ngOnInit() {
  }

  submitSubject() {
    this.subjectService.addSubject(this.subject);
    this.subject = new Subject();
    this.router.navigate(['new-subject']);
  }

}
