import { EditLabComponent } from './edit-lab.component';
import { AddProjectComponent } from './add-project.component';
import { AddLabComponent } from './add-lab.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Parameters'
    },
    children: [
      {
        path: '',
        redirectTo: 'settings'
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings'
        }
      },
      {
        path: 'add-lab',
        component: AddLabComponent,
        data: {
          title: 'Add-Lab'
        }
      },
      {
        path: 'add-project',
        component: AddProjectComponent,
        data: {
          title: 'Add-Project'
        }
      },
      {
        path: 'edit-lab/:id',
        component: EditLabComponent,
        data: {
          title: 'Update Lab'
        }
      }
     
       
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
export class ParametersRoutingModule { }
