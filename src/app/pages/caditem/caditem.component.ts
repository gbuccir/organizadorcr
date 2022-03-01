import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caditem',
  templateUrl: './caditem.component.html',
  styleUrls: ['./caditem.component.scss'],
})
export class CaditemComponent implements OnInit {

  public itemGuardado = "";
  public itemGuardadoLocal = "";
  public itemGuardadoLocalMaster = "";

  listaSalva = []
  constructor() { }

  ngOnInit() {
    let itemlista = JSON.parse(localStorage.getItem('lista'))
    if(itemlista)
    this.listaSalva = [...itemlista];
  }

  continuar(){
    const lista = [
      {
        id: this.listaSalva.length+1, 
        itemGuardado: this.itemGuardado, 
        itemGuardadoLocal:this.itemGuardadoLocal, 
        itemGuardadoLocalMaster: this.itemGuardadoLocalMaster
      }
    ]
    localStorage.setItem('lista', JSON.stringify(lista))
  }
}
