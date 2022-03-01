import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListitemComponent } from './listitem.component';



const routes: Routes = [
  {
    path: '',
    component: ListitemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListItemRoutingModule {}
