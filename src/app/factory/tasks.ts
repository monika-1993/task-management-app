import { Status, Task as TaskType } from './../shared/types';

export class Task {
  title: string;
  description: string;
  status: Status;
  userAssigned: number;

  constructor(title: string, status: Status, userAssigned: number, description: string = '') {
    this.title = title;
    this.description = description;
    this.status = status;
    this.userAssigned = userAssigned;
  }

  public static createTaskObject(title: string, status: Status, userAssigned: number, description: string = '')
    : TaskType {
    return new Task(title, status, userAssigned, description);
  }
}
