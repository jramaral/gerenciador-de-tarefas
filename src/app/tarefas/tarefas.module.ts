import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, tarefaConcluidaDirective } from './shared';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { ListarTarefaComponent } from './listar';



@NgModule({
  declarations: [
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    ListarTarefaComponent,
    tarefaConcluidaDirective
  ],
  providers:[
    TarefaService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TarefasModule { }
