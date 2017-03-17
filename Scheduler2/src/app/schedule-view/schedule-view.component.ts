import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.css']
})
export class ScheduleViewComponent implements OnInit {

  // Schedule properties
  workdays_N: number = 5;
  weekdays: String[] = [];
  time_starts: String[] = [];
  start_time: number = 8;
  end_time: number = 14;
  time_slots: number[] = [];


  // Subject information
  subjects: Subject[];

  constructor(private SubjectService: SubjectService) {

    var temp_arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (var i = 0; i < this.workdays_N; i++) {
      this.weekdays.push(temp_arr[i]);
    }
    for (var i = 0; i < (this.end_time + 1 - this.start_time); i++) {
      if ((this.start_time + i) >= 10)
        this.time_starts.push((this.start_time + i) + ":00");
      else
        this.time_starts.push("0" + (this.start_time + i) + ":00");
      this.time_slots.push(i);
    }

    this.subjects = this.SubjectService.subjects;
  }

  ngOnInit() {
  }
}
