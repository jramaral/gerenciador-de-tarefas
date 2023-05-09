import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    // this.tarefas =[ 
    //   new Tarefa(1,"Tarefa 1", false),
    //   new Tarefa(1,"Tarefa 2", true)
    // ]

  }
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    Swal.fire({
      title: `Tem certeza que deseja remover ${tarefa.nome} ?`,
      text: 'Você não será capaz de recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, remover isso!',
      cancelButtonText: 'Não, vou manter'
    }).then((result)=>{
      console.log(result)
      if(result.value){
        this.tarefaService.remover(tarefa.id);
        this.tarefas = this.listarTodos();
        Swal.fire('Excluído!','Seu registro foi deletado','success')
      } else if (result.dismiss===Swal.DismissReason.cancel){
        Swal.fire(
        
          'Operação cancelada',
          'Seu registro está seguro :)',
          'error'
        )
      }
    })

   

  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }



}
