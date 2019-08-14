import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material modules
import {
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule
} from '@angular/material';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        MatDialogModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatChipsModule,
        BrowserAnimationsModule
    ],
    providers: [
    ],
    exports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        // Material modules
        MatDialogModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatChipsModule
    ]
})
export class SharedModule { }
