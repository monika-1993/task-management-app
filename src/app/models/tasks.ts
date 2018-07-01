export class Task {
  title: string;
  description: string;
  status: string;
  userAssigned: number;

  constructor(title: string, status: string, userAssigned: number, description: string = '') {
    this.title = title;
    this.description = description;
    this.status = status;
    this.userAssigned = this.userAssigned;
  }
}
