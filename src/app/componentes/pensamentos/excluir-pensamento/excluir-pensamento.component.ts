import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})


export class ExcluirPensamentoComponent implements OnInit {
  pensamento : Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor( 
    private service : PensamentoService,
    private router : Router,
    private  route : ActivatedRoute /*classe que fornece informações sobre os parametros, rotas/caminhos  que serão buscado lá dos cards de pensamento*/
    ){ }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento
      })
    }
  
    excluirPensamento() {
      if(this.pensamento.id) {
        this.service.excluir(this.pensamento.id).subscribe(() => {
          this.router.navigate(['/listarPensamento'])
        })
      }
    }
  
    cancelar() {
      this.router.navigate(['/listarPensamento'])
    }
}


/* Snapshot: Contem as informações de uma rotqa associada a um componente carregado em uma saida em um determinado momento.  

ParamMap: Um mapa que fornece acesso aos parâmetros obrigatórios e opcionais específicos de uma rota. O mapa suporta a recuperação de um único valor get() ou de vários valores com getAll().*/
