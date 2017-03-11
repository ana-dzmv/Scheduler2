import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  subject: Subject = new Subject();

  constructor(private route: ActivatedRoute, private subjectService: SubjectService) { }

  ngOnInit() {
    this.route.params.subscribe(p=> this.subject = this.subjectService.get(p['id']));
  }

}
