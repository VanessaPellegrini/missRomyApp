import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

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
import { LoginComponent } from './login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { LoginPageComponent } from './pages/login-page/login-page.component';
//import { LoginFormComponent } from './components/login-form/login-form.component';



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
    CpanelAdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
