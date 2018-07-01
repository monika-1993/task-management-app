import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { TaskManagementService } from '../../services/task-management.service';
import { User } from '../../shared/types';
import { DialogCreateTaskComponent } from '../dialog-create-task/dialog-create-task.component';

@Component({
  selector: 'app-user-task-list',
  templateUrl: './user-task-list.component.html',
  styleUrls: ['./user-task-list.component.css']
})
export class UserTaskListComponent implements OnInit {
  @Input() public user: User;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog(userId: number): void {
    const dialogRef = this.dialog.open(DialogCreateTaskComponent, {
      width: '250px',
      data: {userId}
    });
  }

}
