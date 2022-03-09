import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ListitemComponent } from '../listitem/listitem.component';

@Component({
  selector: 'app-caditem',
  templateUrl: './caditem.component.html',
  styleUrls: ['./caditem.component.scss'],
})
export class CaditemComponent implements OnInit {

  itemGuardado = "";
  itemGuardadoLocal = "";
  itemGuardadoLocalMaster = "";

  listaSalva = [];

  @ViewChild('cadSlider') slider: IonSlides;
  currentIndex:number=0;

  constructor() { }

  ngOnInit() {
    let itemlista = JSON.parse(localStorage.getItem('lista'))
    if(itemlista)
    this.listaSalva = [...itemlista];
  }

  getSlideIndex(){
    this.slider.getActiveIndex().then(
      (index)=>{
        this.currentIndex = index;
     });
   }

  continuar(){
    let listItens = JSON.parse(localStorage.getItem('lista')) ;
    let lista = [
      {
        id: this.listaSalva.length+1, 
        itemGuardado: this.itemGuardado, 
        itemGuardadoLocal:this.itemGuardadoLocal, 
        itemGuardadoLocalMaster: this.itemGuardadoLocalMaster
      }
    ];
    lista.push(listItens);
    localStorage.setItem('lista', JSON.stringify(lista))
  }
}
