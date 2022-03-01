import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss'],
})
export class ListitemComponent implements OnInit {

  listItens = [
    // {id: 1, descricao:"RG", n2:"Caixa", n3: "Armario"}
  ]

  constructor() { }

  ngOnInit() {
    // let lista = [{id: 1, descricao:"RG", n2:"Caixa", n3: "Armario"}]
    // localStorage.setItem('lista', JSON.stringify(lista))
    this.getItens();
  }

  getItens() {
    this.listItens = JSON.parse(localStorage.getItem('lista')) ;
    
  }

}
