import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { BlockBtnComponent } from './components/block-btn/block-btn.component';
import { ClassHistoryComponent } from './components/class-history/class-history.component';
import { OptionsComponent } from './components/options/options.component';
import { ClassComponent } from './components/class/class.component';
import { LastTicketsComponent } from './components/last-tickets/last-tickets.component';
import { CrearClaseComponent } from './pages/crear-clase/crear-clase.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { SharedModule } from '../../shared/shared.module';
import { CpanelComponent } from './pages/cpanel/cpanel.component';
import { CardStudentComponent } from './components/card-student/card-student.component';
import { ViewStudenListComponent } from './pages/view-studen-list/view-studen-list.component';
import { UpdateClassComponent } from './pages/update-class/update-class.component';
import { HoursComponent } from './components/hours/hours.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { ClassFormComponent } from './components/class-form/class-form.component';
import { ClassSelectorComponent } from './pages/class-selector/class-selector.component';
import { ClassSelectorCardComponent } from './components/class-selector-card/class-selector-card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StudentPageComponent,
    AdminPageComponent,
    BlockBtnComponent,
    ClassHistoryComponent,
    OptionsComponent,
    ClassComponent,
    LastTicketsComponent,
    CrearClaseComponent,
    CrearUsuarioComponent,
    CpanelComponent,
    CardStudentComponent,
    ViewStudenListComponent,
    UpdateClassComponent,
    HoursComponent,
    TitleBarComponent,
    ClassFormComponent,
    ClassSelectorComponent,
    ClassSelectorCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class DashboardModule { }
