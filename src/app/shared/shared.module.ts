import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';



@NgModule({
  declarations: [
    MeuComponenteComponent
  ],
  exports: [MeuComponenteComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
