import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClaseComponent } from './crear-clase.component';

const routes: Routes = [
  { path: '', component: CrearClaseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearClaseRoutingModule { }
