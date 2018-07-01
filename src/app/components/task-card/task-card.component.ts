import { Component, OnInit, Input } from '@angular/core';

import { Task, StatusList } from '../../shared/types';
import { statusList } from '../../shared/helper';
import { TaskManagementService } from './../../services/task-management.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() public task: Task;

  public statuses: StatusList[];

  constructor(private taskService: TaskManagementService) { }

  ngOnInit() {
    this.statuses = statusList();
  }

  public onChangeStatus() {
    this.taskService.changeTaskStatus(this.task.id, this.task.status);
  }

}
