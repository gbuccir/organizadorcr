import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadItemRoutingModule } from './caditem-routing.module';
import { CaditemComponent } from './caditem.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadItemRoutingModule
  ],
  declarations: [CaditemComponent]
})
export class CaditemModule { }
