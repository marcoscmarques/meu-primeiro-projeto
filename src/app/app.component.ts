import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-title title="Alterei aqui" *ngIf="destruir"></app-title>
             <br><br>
             <button (click)="destruirComponent()">Destruir componente</button>
             <router-outlet></router-outlet>
             <app-content>
              <h1>Aula de diretiva utilizando ng-content</h1>
              <hr>
             </app-content>
             <app-content>
             <h1>Aula de diretiva utilizando ng-content 2</h1>
             <hr>
            </app-content>
            <h1>Input</h1>
            <app-meu-componente [conta]="valor" ></app-meu-componente>
            <button (click)="adicionar()">Adiciona na variável conta</button>
            <hr>
            <h1>Output</h1>
            <ng-template [ngIf]="dados">
              <h1>Nome: {{dados.nome}} - Idade: {{dados.idade}}</h1>
            </ng-template>
            <app-meu-componente (dados)="setDados($event)"></app-meu-componente>
            `,
})
export class AppComponent {  
  public destruir: boolean = true;                                      

  public valor: number = 0;
  public dados: {nome: string, idade: number} | undefined;


  public adicionar() {
    this.valor++;
  }

  public setDados(event: {nome: string, idade: number}) {
    this.dados = event;
  }

  public destruirComponent() {
    this.destruir = false;
  }
}


