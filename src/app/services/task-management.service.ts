import { Injectable } from '@angular/core';

import { Task, User, Status } from './../shared/types';

const users: User[] = [
  {
    name: 'Nick',
    id: 1,
  },
  {
    name: 'Minu',
    id: 2,
  },
  {
    name: 'Tom',
    id: 3,
  },
  {
    name: 'Albert',
    id: 4,
  },
];

const tasks: Task[] = [
  {
    title: 'Task1',
    description: 'desc 1',
    userAssigned: 1,
    status: 2,
    id: 1
  },
  {
    title: 'Task2',
    description: 'desc 2',
    userAssigned: 2,
    status: 1,
    id: 2
  },
  {
    title: 'Task3',
    description: 'desc 3',
    userAssigned: 3,
    status: 4,
    id: 3
  },
  {
    title: 'Task4',
    description: 'desc 4',
    userAssigned: 4,
    status: 3,
    id: 4
  }
];

@Injectable()
export class TaskManagementService {

  constructor() { }

  public getAllUsers = () => {
    return users;
  }

  public addUser = (user: User) => {
    users.push(user);
    return users;
  }

  public getAllTasks = () => {
    return tasks;
  }

  public addTask = (task: Task) => {
    task.id = Math.floor(Math.random() * 1000);
    tasks.push(task);
    console.log(tasks, 'service');
  }

  public getUsersWithTasks = () => {
    console.log(users, tasks, 'service');
    users.forEach(user => user.tasks = tasks.filter(t => t.userAssigned === user.id));
    return users;
  }

  public changeTaskStatus = (taskId: number, status: Status) => {
    const taskIndex = tasks.indexOf(tasks.find(t => t.id === taskId));
    tasks[taskIndex].status = status;
  }


}
