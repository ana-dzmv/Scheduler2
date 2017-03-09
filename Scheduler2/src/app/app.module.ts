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
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
