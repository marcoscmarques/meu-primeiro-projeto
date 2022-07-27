import {
  AfterContentChecked, AfterViewChecked, AfterViewInit, Component,
  DoCheck, Input, OnChanges, OnDestroy, OnInit
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,
                                       AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() public title: string = "Olá mundo!!!";
  
  //Template Data Binding
  public posicao: {x: number, y: number} = {x: 0, y:0}

  //Interpolation
  public exemploInterpolation: string = "renderizado via interpolation"
  public umValor: number = 1
 

  //Property Binding
  public umaVariavelBoleana: boolean = true;
  public umaImagem = "http://www.ghcmarques.com/img/logo.png";

  //Diretiva estrutural
  public condicaoClick: boolean = false;
  public lista: Array<{ nome: string, idade: number}> = [
    { nome: "Marcos", idade: 30},
    { nome: "Rodrigo", idade: 29},
    { nome: "Marcelo", idade: 28},
    { nome: "Maurício", idade: 27},
    { nome: "Felipe", idade: 32},
  ]

  public novaLista: Array<{ nome: string, idade: number}> = JSON.parse(localStorage.getItem("novaLista") || '[]');

  public menu: string = "item1";

  //Diretiva de atributos
  public habilitado: boolean = false;
  public cor: string = "green";
  public tamanho: string = "20px";

  //Pipe
  public data: Date = new Date();

  public onClick() {
    this.condicaoClick = !this.condicaoClick;
  }

  public adicionaItem() {
    this.lista.push({ nome: "Simone", idade: 37})
  }

  public apagaItem(indice: number) {
    this.lista.splice(indice, 1)
  }

  public adicionaItemLocalStorage() {
    this.novaLista.push({ nome: "Simone", idade: 37})
    localStorage.setItem("novaLista", JSON.stringify(this.novaLista))
  }

  public apagaItemLocalStorage(indice: number) {
    this.novaLista.splice(indice, 1)
    localStorage.setItem("novaLista", JSON.stringify(this.novaLista))
  }

  public apagaNovaListaLocalStorage() {
    this.novaLista = [];
    localStorage.removeItem("novaLista")
  }

  public removeLocalStorage() {
    this.novaLista = [];
    localStorage.clear();
  }

  //Event Binding
  public umAlerta() {
    alert("Aqui um alerta");
  }

  public umAlertaComParametro(umParametro: String) {
    alert(umParametro);
  }
  
  public umAlertaComParametroEvento(umParametro: MouseEvent) {
    console.log(umParametro);
  }
  
  public mouseMove(umParametro: MouseEvent) {
    console.log(umParametro);
    this.posicao.x = umParametro.offsetX;
    this.posicao.y = umParametro.offsetY;
  }


  constructor() { }

  ngOnInit(): void {
      /* 
        Executado após o Angular exibir pela primeira vez as propriedades 
        vinculadas aos dados ou quando o componente for inicializado.
      */
      console.log("ngOnInit")
      
      setInterval(()=>{
        this.habilitado = !this.habilitado
      }, 1000)
  }

  ngOnChanges(): void {
    /*
      Executado quando ocorre uma alteração num valor de um controle. 
      Sempre que um componente recebe um dado através do @Input(), o evento é invocado.
    */
    console.log("ngOnChanges")
  }

  ngDoCheck(): void {
    //Executado quando as propriedades de entrada de um componente é verificada.
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    /*
      Executado quando o Angular realiza qualquer projeção de conteúdo nas  
      visualizações do componente.
    */
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    /*
      Executado quando o conteúdo do componente é verificado pelo mecanismo de detecção 
      de alteração do Angular.
    */
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    //Executado quando a visualização do componente foi totalmente inicializada.
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    /*
      Executado quando a visualização de um determinado componente
      foi verificada pelo algoritmo de detecção de alterações do Angular.
    */
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    //Executado quando o componente é destruido.
    console.log("ngOnDestroy")
  }
}
