import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.css']
})
export class ScheduleViewComponent implements OnInit {
  subjects: Subject[];

  constructor(private SubjectService: SubjectService) {
    this.subjects = this.SubjectService.subjects;
  }

  ngOnInit() {
  }
}
