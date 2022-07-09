import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisterComponent } from './admin/register/register.component';
const routes: Routes = [

  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
         path:'register',
         component: RegisterComponent,
      },]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
