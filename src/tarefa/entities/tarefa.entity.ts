import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tarefa' })
export class Tarefa {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'descricao', nullable: false})
    descricao: string;

    @Column({ name: 'concluido', default: false })
    concluido: boolean;
}
