import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './profile/content/company/company.component';
import { PersonalComponent } from './profile/content/personal/personal.component';
import { PreferenceComponent } from './profile/content/preference/preference.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full'},
  {path:'signin', component:SigninComponent, },
  {path:'profile', component:ProfileComponent, children:[
    {path:'personal', component:PersonalComponent},
    {path:'company', component:CompanyComponent},
    {path:'preference', component:PreferenceComponent}
  ]},
  {path:'dashboard', component:DashboardComponent},
  {path:'user-management', component:UserManagementComponent},
  {path:'user-dashboard', component:UserdashboardComponent},
  {path:'brands-page', component:BrandsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
