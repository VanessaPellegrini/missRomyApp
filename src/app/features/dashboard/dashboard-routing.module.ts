import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '',
        loadChildren: () => 
          import('./pages/cpanel/cpanel.module').then((m) => m.CpanelModule)
      },
      { path: 'crear-clase', 
        loadChildren: () => 
          import('./components/crear-clase/crear-clase.module').then((m) => m.CrearClaseModule)
      },
    ]
  },
  { path: 'crear-usuario', component: CrearUsuarioComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
