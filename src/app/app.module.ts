import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './landingPage/home/home.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { PlansComponent } from './components/plans/plans.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { NavbarBaseComponent } from './components/shared/navbar-base/navbar-base.component';
import { ControlPanelComponent } from './adminPage/control-panel/control-panel.component';
import { OptionsComponent } from './components/options/options.component';
import { ClassComponent } from './components/class/class.component';
import { ClassHistoryComponent } from './components/class-history/class-history.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { LastTicketsComponent } from './components/last-tickets/last-tickets.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CpanelAdminComponent } from './components/cpanel-admin/cpanel-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BenefitsComponent,
    PlansComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    NavbarBaseComponent,
    ControlPanelComponent,
    OptionsComponent,
    ClassComponent,
    ClassHistoryComponent,
    StudentsListComponent,
    LastTicketsComponent,
    CrearClaseComponent,
    CrearUsuarioComponent,
    CpanelAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
