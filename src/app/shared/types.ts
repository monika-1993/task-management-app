export interface DialogData {
  title: string;
  description: string;
  status: string;
}

export interface Task {
  title: string;
  description: string;
  status: Status;
  userAssigned: number;
  id?: number;
}

export interface User {
  name: string;
  id: number;
  tasks?: Task[];
}

export enum Status {
  open = 1,
  inProcess = 2,
  done = 3,
  onHold = 4,
  sent = 5,
  schedule = 6
}

export interface StatusList {
  code: number;
  statusName: string;
}
