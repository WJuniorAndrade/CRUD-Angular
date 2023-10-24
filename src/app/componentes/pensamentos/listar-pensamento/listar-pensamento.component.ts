import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})

export class ListarPensamentoComponent implements OnInit{

    /* declaramos que o tipo do objeto é Pensamento que seria a interface com a TIPAGEM ESTRUTURAL*/
    
    /* A lista de penamento vai ser buscada do Backend */
  listaPensamentos: Pensamento [] = [];

  constructor (private service : PensamentoService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) =>{
      this.listaPensamentos = listaPensamentos
    }
)}
}

  /* ngOnInit: é o inicio de ciclo de vida de um component É toda lógica que deve ser executada assim que o componete for inicializado/carregado */

  /* .Subscribe: Define como obter ou gerar valores ou mensagens a serem publicados. */
