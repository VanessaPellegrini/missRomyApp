import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '',
        loadChildren: () => 
          import('./pages/cpanel/cpanel.module').then((m) => m.CpanelModule)
      },
      { path: 'crear-clase', 
        loadChildren: () => 
          import('./pages/crear-clase/crear-clase.module').then((m) => m.CrearClaseModule)
      },
      { path: 'crear-usuario', 
        loadChildren: () => 
          import('./pages/crear-usuario/crear-usuario.module').then((m) => m.CrearUsuarioModule)
      },
      { path: 'lista-estudiantes', 
      loadChildren: () => 
        import('./pages/view-studen-list/view-studen-list.module').then((m) => m.ViewStudenListModule)
      },
      { path: 'modificar-clase/:key', 
        loadChildren: () => 
          import('./pages/update-class/update-class.module').then((m) => m.UpdateClassModule)
      },
      { path: 'seleccionar-clase', 
      loadChildren: () => 
        import('./pages/class-selector/class-selector.module').then((m) => m.ClassSelectorModule)
    }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
