import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { ClassHistoryComponent } from './components/class-history/class-history.component';
import { OptionsComponent } from './components/options/options.component';
import { ClassComponent } from './components/class/class.component';
import { LastTicketsComponent } from './components/last-tickets/last-tickets.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentPageComponent,
    AdminPageComponent,
    StudentsListComponent,
    ClassHistoryComponent,
    OptionsComponent,
    ClassComponent,
    LastTicketsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
