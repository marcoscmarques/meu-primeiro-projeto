import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.scss']
})
export class MeuComponenteComponent implements OnInit {

  constructor() { }

   //@Input
   @Input() public conta: number = 0;

   //@Output
   @Output() public dados = new EventEmitter();
   
   public lista: Array<{nome: String, idade: number}> = [
    {nome: "Marcos", idade: 30},
    {nome: "Getúlio", idade: 25},
   ]

   public getDados(indice: number) {
      this.dados.emit(this.lista[indice]);
   }

   ngOnInit(): void {
  }

}
