import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingRoutingModule } from './landing-routing.module';
import { MaterialModule } from '../../material/material.module';
  
import { HomePageComponent } from 'src/app/features/landing/pages/home-page/home-page.component';
import { BenefitsComponent } from 'src/app/features/landing/components/benefits/benefits.component';
import { PlansComponent } from 'src/app/features/landing/components/plans/plans.component';
import { TestimonialsComponent } from 'src/app/features/landing/components/testimonials/testimonials.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeroComponent } from 'src/app/features/landing/components/hero/hero.component';
import { AboutComponent } from 'src/app/features/landing/components/about/about.component';
import { NavbarBaseComponent } from 'src/app/shared/navbar-base/navbar-base.component';
import { ContactComponent } from 'src/app/features/landing/components/contact/contact.component';




@NgModule({
  declarations: [
    HomePageComponent,
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
