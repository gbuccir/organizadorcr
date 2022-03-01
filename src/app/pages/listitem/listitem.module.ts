import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListItemRoutingModule } from './listitem-routing.module';
import { ListitemComponent } from './listitem.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListItemRoutingModule
  ],
  declarations: [ListitemComponent]
})
export class ListitemModule { }
