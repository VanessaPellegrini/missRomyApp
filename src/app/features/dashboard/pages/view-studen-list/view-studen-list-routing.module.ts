import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStudenListComponent } from './view-studen-list.component';

const routes: Routes = [
  { path: '', component: ViewStudenListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewStudenListRoutingModule { }
