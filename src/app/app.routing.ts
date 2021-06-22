

import { AddLabComponent } from './views/parameters/add-lab.component';
// import { LabsComponent } from './views/labs/labs.component';
// import { LabsComponent } from './views/labs-container/labs/labs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LabsComponent } from './containers/labs-container'

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './frontend/login/login.component';
import { RegisterComponent } from './frontend/register/register.component';
//import * as path from 'path';


export const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'signup' ,component: RegisterComponent},
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },

  {
    path: 'add-lab',
    component: AddLabComponent,
    data: {
      title: 'Add Lab Page'
    }
  },

  
  {
    path: '',
    component: LabsComponent,
    data: {
      title: 'Labs page'
    },
    children:[
      {
        path: 'labs',
        loadChildren:() => import('./views/lab-content/lab-content.module').then(m => m.LabContentModule)
      },
      {
        path:'lab-details',
        loadChildren:() => import('./views/lab-details/lab-details.module').then(m => m.LabDetailsModule)
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      
      
     
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'parameters',
        loadChildren: () => import('./views/parameters/parameters.module').then(m => m.ParametersModule)
      }
      
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
