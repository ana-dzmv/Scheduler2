import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ScheduleViewComponent } from './schedule-view/schedule-view.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';

import { UserProfileService } from './userProfile.service';
import { SubjectService } from './subject.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'index', component: ProfileViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'new-subject', component: NewSubjectComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileViewComponent,
    ScheduleViewComponent,
    NewSubjectComponent,
    // LoginFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserProfileService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
