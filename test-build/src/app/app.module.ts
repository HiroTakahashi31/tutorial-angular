import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DialogOverviewExample, DialogOverviewExampleDialog
} from './dialog-overview-example/dialog-overview-example.component';
import { DemoDialogSummaryComponent, DemoDialogSummaryComponentDialog } from './demo-dialog-summary/demo-dialog-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    DemoDialogSummaryComponent,
    DemoDialogSummaryComponentDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog, DemoDialogSummaryComponentDialog],
})
export class AppModule { }
