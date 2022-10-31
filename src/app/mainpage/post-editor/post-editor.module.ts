import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditorComponent } from './post-editor.component';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { QuillModule } from 'ngx-quill';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [
    PostEditorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ChipsModule,
    AutoCompleteModule,
    QuillModule,
    OverlayPanelModule,
    FileUploadModule,
    CheckboxModule,
    DialogModule,
    TooltipModule,
  ],
  exports: [
    PostEditorComponent
  ]
})
export class PostEditorModule { }