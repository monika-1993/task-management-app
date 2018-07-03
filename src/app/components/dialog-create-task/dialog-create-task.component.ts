import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { TaskManagementService } from '../../services/task-management.service';
import { Task, StatusList, Status } from '../../shared/types';
import { statusList } from '../../shared/helper';
import { Task as TaskClass } from '../../factory/tasks';

@Component({
  selector: 'app-dialog-create-task',
  templateUrl: './dialog-create-task.component.html',
  styleUrls: ['./dialog-create-task.component.css']
})
export class DialogCreateTaskComponent implements OnInit {
  public task: Task = TaskClass.createTaskObject('', Status.open, this.data.userId, '');
  public statuses: StatusList[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogCreateTaskComponent>,
    private taskService: TaskManagementService,
    @Inject(MAT_DIALOG_DATA) public data: { userId: number }) { }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.taskService.addTask(this.task);
    this.onClose();
  }

  ngOnInit() {
    this.statuses = statusList();
  }

}
