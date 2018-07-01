import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogData } from '../../shared/types';

@Component({
  selector: 'app-dialog-view-task',
  templateUrl: './dialog-view-task.component.html',
  styleUrls: ['./dialog-view-task.component.css']
})
export class DialogViewTaskComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogViewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


}
