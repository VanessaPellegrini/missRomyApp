import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landingPage/home/home.component';
import { ControlPanelComponent } from './adminPage/control-panel/control-panel.component';
import { CpanelAdminComponent } from './components/cpanel-admin/cpanel-admin.component';
import { CrearClaseComponent } from "./components/crear-clase/crear-clase.component";
import { CrearUsuarioComponent } from "./components/crear-usuario/crear-usuario.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'control-panel', 
    component: ControlPanelComponent,
    children: [
      { path: '', component: CpanelAdminComponent},
      { path: 'crear-clase', component: CrearClaseComponent},
      { path: 'crear-usuario', component: CrearUsuarioComponent},
    ]
  },
  
/*   { path: 'control-panel/asignar', component: ControlPanelComponent},
  { path: 'control-panel/cargar-contenido', component: ControlPanelComponent}, */

  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
