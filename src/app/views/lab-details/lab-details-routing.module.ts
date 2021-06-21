import { LabInfo2Component } from './lab-info2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LabInfoComponent } from './lab-info.component';
import { LabInfo3Component } from './lab-info3.component';
import { LabInfo4Component } from './lab-info4.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Lab-Details'
    },
    children: [
      {
        path: '',
        redirectTo: 'lab-info'
      },
      {
        path: 'lab-info',
        component: LabInfoComponent,
        data: {
          title: 'Lab-Info'
        }
      },
      {
        path: 'lab-info2',
        component: LabInfo2Component,
        data: {
          title: 'Lab-Info2'
        }
      },
      {
        path: 'lab-info3',
        component: LabInfo3Component,
        data: {
          title: 'Lab-Info3'
        }
      },
      {
        path: 'lab-info4',
        component: LabInfo4Component,
        data: {
          title: 'Lab-Info4'
        }
      },
      
      
      
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LabDetailsRoutingModule { }
