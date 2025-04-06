import { TarefaEntity } from "../entities/tarefa.entity";

export class CreateTarefaDto {
    descricao: string;
    concluido: boolean;

    constructor(tarefaEntity: TarefaEntity) {
       this.descricao = tarefaEntity.descricao;
       this.concluido = tarefaEntity.concluido;
    }
}