import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TaskManagementService } from '../../services/task-management.service';
import { Task, StatusList } from '../../shared/types';
import { statusList } from '../../shared/helper';

@Component({
  selector: 'app-dialog-create-task',
  templateUrl: './dialog-create-task.component.html',
  styleUrls: ['./dialog-create-task.component.css']
})
export class DialogCreateTaskComponent implements OnInit {
  public task: Task = {
    title: '',
    description: '',
    status: 1,
    userAssigned: this.data.userId
  };
  public statuses: StatusList[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogCreateTaskComponent>,
    private taskService: TaskManagementService,
    @Inject(MAT_DIALOG_DATA) public data: { userId: number }) { }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // this.task.userAssigned = this.data.userId;
    this.taskService.addTask(this.task);
    this.onClose();
  }

  ngOnInit() {
    this.statuses = statusList();
  }

}
