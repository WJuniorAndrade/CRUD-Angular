import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';


/* É uma constante do tipo ROUTES onde possue um objeto de configuração onde definimos as rotas  */
const routes: Routes = [
  {
    path: '', /* string vazia  */
    redirectTo: 'listarPensamento', /* redirecionamos o site para o "caminho/path" que desejamos carregar a pagina principal ao entrarmos no site */
    pathMatch:'full'
  },

  {
    path: 'criarPensamento', /* onde passamos o nome do /caminho de rota que será carregado  */
    component: CriarPensamentoComponent /* onde especificamos o component a ser carregado no caminho especificado */
  },

  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  }, 

  {
    path:'pensamento',
    component: PensamentoComponent
  },

  {
    path:'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


