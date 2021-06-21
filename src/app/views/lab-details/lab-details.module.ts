
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabInfoComponent } from './lab-info.component';
import { LabDetailsRoutingModule } from './lab-details-routing.module';
import { LabInfo2Component } from './lab-info2.component';
import { LabInfo3Component } from './lab-info3.component';
import { LabInfo4Component } from './lab-info4.component';




@NgModule({
  declarations: [
    
    LabInfoComponent,
         LabInfo2Component,
         LabInfo3Component,
         LabInfo4Component,
         
  ],
  imports: [
    CommonModule,
    LabDetailsRoutingModule
  ]
})
export class LabDetailsModule { }
