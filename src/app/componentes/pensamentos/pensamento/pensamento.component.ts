import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})


export class PensamentoComponent implements OnInit{

  /* declaramos que o tipo do objeto é igual a Pensamento que seria a interface com a tipagem estrutural ou seja */

  @Input() pensamento: Pensamento = {
    id : 0,
    conteudo: 'Array',
    autoria: 'Junior',
    modelo: 'modelo3'
}

constructor (){}
  /*  */
  ngOnInit(): void {
}


/* ngClass retorna class para estilização dos pensamentos */
larguraPensamento () : string {

  if(this.pensamento.conteudo.length >= 256 ){
    return 'pensamento-g'
    
  } else
  return 'pensamenro-p'
  }
}