import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Task, StatusList, Status } from '../../shared/types';
import { statusList, getColorFromStatus } from '../../shared/helper';
import { TaskManagementService } from './../../services/task-management.service';
import { DialogViewTaskComponent } from '../dialog-view-task/dialog-view-task.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() public task: Task;

  public statuses: StatusList[];
  public color: any;
  public chipBackground: any;

  constructor(private taskService: TaskManagementService, public dialog: MatDialog) { }

  ngOnInit() {
    this.statuses = statusList();
    this.setCardColor(this.task.status);
  }

  public onChangeStatus() {
    this.taskService.changeTaskStatus(this.task.id, this.task.status);
    this.setCardColor(this.task.status);
  }

  public startDrag() {
    this.taskService.onDragTask(this.task.id);
  }

  public setCardColor(status: Status) {
    const color = getColorFromStatus(status);
    this.color = {
      'border-left': '5px',
      'border-left-style': 'solid',
      'border-left-color': color
    };
    this.chipBackground = {
      'background-color': color
    };
  }

  public openDialog(userId: number): void {
    const dialogRef = this.dialog.open(DialogViewTaskComponent, {
      width: '400px',
      data: this.task,
      hasBackdrop: true
    });
  }
}
