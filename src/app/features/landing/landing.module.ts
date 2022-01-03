import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { BenefitsComponent } from 'src/app/components/benefits/benefits.component';
import { PlansComponent } from 'src/app/components/plans/plans.component';
import { TestimonialsComponent } from 'src/app/components/testimonials/testimonials.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { NavbarBaseComponent } from 'src/app/components/shared/navbar-base/navbar-base.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomePageComponent,
    LandingComponent,
    BenefitsComponent,
    PlansComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    NavbarBaseComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,

  ]
})
export class LandingModule { }
