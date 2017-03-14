import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ScheduleViewComponent } from './schedule-view/schedule-view.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

// import { LoginFormComponent } from './login-form/login-form.component';

import { UserProfileService } from './userProfile.service';
import { SubjectService } from './subject.service';
import { TaskService } from './task.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'index', component: EditSubjectComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'new-subject', component: NewSubjectComponent },
  { path: 'edit-subject/:id', component: EditSubjectComponent },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'edit-task', component: EditTaskComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ProfileViewComponent,
    ScheduleViewComponent,
    NewSubjectComponent,
    EditSubjectComponent,
    NewTaskComponent,
    EditTaskComponent,
    // LoginFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserProfileService, SubjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
