import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './task/list-tasks.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path:  'login', component :LoginComponent},
  {path : 'index', component : ListTasksComponent },
  {path : 'task', component : DataTableComponent },
  {path : '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
