import { Component, OnInit } from '@angular/core';

import { TaskManagementService } from './../../services/task-management.service';
import { User } from '../../shared/types';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {
  public users: User[];
  constructor(private taskService: TaskManagementService) { }

  ngOnInit() {
    this.users = this.taskService.getUsersWithTasks();
  }
}
