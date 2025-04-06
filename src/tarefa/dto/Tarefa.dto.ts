import { TarefaEntity } from "../entities/tarefa.entity";

export class TarefaDto {
    descricao: string;
    concluido: boolean;

    constructor(tarefaEntity: TarefaEntity) {
       this.descricao = tarefaEntity.descricao;
       this.concluido = tarefaEntity.concluido;
    }
}