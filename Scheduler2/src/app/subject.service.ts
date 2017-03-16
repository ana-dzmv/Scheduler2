import { Injectable } from '@angular/core';
import { Subject } from './subject';

@Injectable()
export class SubjectService {

  subjects: Subject[] = [];
  _id: number = 0;

  constructor() { }

  get(id: number): Subject {
    for (const s of this.subjects) {
      if (s.id == id) return s; // return a specified task if its id is matched
    }
  }


  addSubject(subject: Subject): void {
    subject.id = this._id++;
    this.subjects.push(subject);
  }


}
