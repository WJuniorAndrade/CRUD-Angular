import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { } /*importar o modules do HttpClient "HttpClientModule"*/

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  } //lista todos os Objetos da API.

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento )

  }
  
  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}





/* o decorator @Injectable é uma classe "injetavel" onde pode ser usada em outros componentes  e classes atraves do metodo de (injeçãoo de dependências)*/

 /* providedIn com o valor root, que indica a disponibilidade de utilização ou injeção desta classe por toda a aplicação.  */

 /* private readonly API: Onde inserimos a URL Resources gerada ao rodar o Json-serve/ API REST

  Readonly: remove todos os métodos de alteração de uma classe. */

  /* Observable (RXJS): responsavel por compartilhar dados. O padrão observador é um padrão de design de software no qual um objeto, denominado sujeito, mantém uma lista de seus dependentes, chamados observadores/observer , e os notifica automaticamente sobre mudanças de estado. Este padrão é semelhante (mas não idêntico) ao publicar/assinar padrão de design.*/


/* Get (listar): resposavel por listar os atributos da API 
    significado da linha a baixo seria:

    "http seleciona a lista da Array de pensamentos dentro da API" 

    <Pensamento []> Generics >


    Post (criar): resposavel por cadastrar novos pensamentos
*/
