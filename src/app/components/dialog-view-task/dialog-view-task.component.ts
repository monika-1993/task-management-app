import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { getColorFromStatus } from '../../shared/helper';
import { Task } from '../../shared/types';
import { getstatusNameFromCode } from '../../shared/helper';

@Component({
  selector: 'app-dialog-view-task',
  templateUrl: './dialog-view-task.component.html',
  styleUrls: ['./dialog-view-task.component.css']
})
export class DialogViewTaskComponent implements OnInit {
  public statusName = getstatusNameFromCode;
  public bgColor: any;
  constructor(
    public dialogRef: MatDialogRef<DialogViewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.bgColor = {
      'background-color': getColorFromStatus(this.data.status)
    };
  }


}
