import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassSelectorComponent } from './class-selector.component';


const routes: Routes = [
  { path: '', component: ClassSelectorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassSelectorRoutingModule { }
