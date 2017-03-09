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

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileViewComponent },
  { path: 'new-subject', component: NewSubjectComponent },
  { path: 'edit-subject', component: EditSubjectComponent },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'edit-task', component: EditTaskComponent }
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
    EditTaskComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
