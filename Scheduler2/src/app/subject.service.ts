import { Injectable } from '@angular/core';
import { Subject } from './subject';

@Injectable()
export class SubjectService {

  subjects: Subject[] = [];
  private _id: number = 0;

  constructor() { }

  get(id: number): Subject {
    for (const s of this.subjects) {
      if (s.id == id) return s; // return a specified task if its id is matched
    }
  }


  addSubject(subject: Subject): void {
    subject.id = this._id++;
    this.setSubjectSlots(subject);
    this.subjects.push(subject);
  }

  setSubjectSlots(subject: Subject): void {
    subject.slots_taken_count = parseInt(subject.end_time) - parseInt(subject.start_time);
    for (var i = 0; i <= 7; i++)
      if ((8 + i) == parseInt(subject.start_time))
        subject.slots_taken.push(i+1);
    for (var i = 1; i < subject.slots_taken_count; i++) {
      subject.slots_taken.push(subject.slots_taken[0] + i);
    }


  }


}
