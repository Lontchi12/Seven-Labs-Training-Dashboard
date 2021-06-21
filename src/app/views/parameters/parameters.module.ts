import { ParametersRoutingModule } from './parameters-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { AddLabComponent } from './add-lab.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { QuillModule } from 'ngx-quill';
import { AddProjectComponent } from './add-project.component'
import { FormsModule } from '@angular/forms';
import { EditLabComponent } from './edit-lab.component';


export const QuillConfiguration = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    ['link'],
    ['clean'],
  ],
}









@NgModule({
  declarations: [
    SettingsComponent, 
    AddLabComponent, AddProjectComponent, EditLabComponent, 
  ],
  imports: [
    CommonModule, 
    ParametersRoutingModule,
    QuillModule,
    FormsModule
    
    
    
  ],

  

})
export class ParametersModule { }
