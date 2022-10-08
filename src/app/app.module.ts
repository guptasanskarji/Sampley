import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { Content1Component } from './dashboard/content1/content1.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { ContentComponent } from './profile/content/content.component';
import { FeedbackComponent } from './profile/feedback/feedback.component';
import { SidebarComponent } from './profile/sidebar/sidebar.component';
import { CompanyComponent } from './profile/content/company/company.component';
import { PersonalComponent } from './profile/content/personal/personal.component';
import { PreferenceComponent } from './profile/content/preference/preference.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserSummaryComponent } from './user-management/user-summary/user-summary.component';
import { UserContentComponent } from './user-management/user-content/user-content.component';
import { UserSidebarComponent } from './user-management/user-sidebar/user-sidebar.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { Content2Component } from './userdashboard/content2/content2.component';
import { InvitationsComponent } from './userdashboard/invitations/invitations.component';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { BrandContentComponent } from './brands-page/brand-content/brand-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    SigninComponent,
    Content1Component,
    SummaryComponent,
    ContentComponent,
    FeedbackComponent,
    SidebarComponent,
    CompanyComponent,
    PersonalComponent,
    PreferenceComponent,
    UserManagementComponent,
    UserSummaryComponent,
    UserContentComponent,
    UserSidebarComponent,
    UserdashboardComponent,
    Content2Component,
    InvitationsComponent,
    BrandsPageComponent,
    BrandContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
