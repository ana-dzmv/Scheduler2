import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskService {

  tasks: Task[] = [];

  constructor() { }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

}
