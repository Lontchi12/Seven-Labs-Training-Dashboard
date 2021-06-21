import { LabContentComponent } from './lab-content.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: LabContentComponent,
    data: {
      title: 'Labs'
    }
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LabContentRoutingModule { }
