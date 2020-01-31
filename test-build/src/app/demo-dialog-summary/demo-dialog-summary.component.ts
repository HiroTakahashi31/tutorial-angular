import { Component, OnInit, inject, Inject } from '@angular/core';
import { DialogData } from '../dialog-overview-example/dialog-overview-example.component';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-demo-dialog-summary',
  templateUrl: './demo-dialog-summary.component.html',
  styleUrls: ['./demo-dialog-summary.component.styl']
})
export class DemoDialogSummaryComponent implements OnInit {
  summaryComment: string = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.summaryComment = this.fetchSummaryComment();
  }

  private fetchSummaryComment(): string {
    return "this is summaryComment";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DemoDialogSummaryComponentDialog, {
      width: '250px',
      data: { comment: this.summaryComment },
     // disableClose:false,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed.  param ==> ${result}`);
      if (result !== undefined) { this.summaryComment = result; }
    })
  }
}

// dialog component
@Component({
  selector: 'app-demo-dialog-summary-dialog',
  templateUrl: 'demo-dialog-summary-dialog.html',
})
export class DemoDialogSummaryComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<DemoDialogSummaryComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick():void{
    this.dialogRef.close();
  }

}
