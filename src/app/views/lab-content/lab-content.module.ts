import { LabContentRoutingModule } from './lab-content-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabContentComponent } from './lab-content.component';




@NgModule({
  declarations: [
    LabContentComponent
  ],
  imports: [
    CommonModule,
    LabContentRoutingModule
  ]
})
export class LabContentModule { }
