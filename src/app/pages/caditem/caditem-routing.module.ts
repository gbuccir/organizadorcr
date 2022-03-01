import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaditemComponent } from './caditem.component';



const routes: Routes = [
  {
    path: '',
    component: CaditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadItemRoutingModule {}
