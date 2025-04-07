import { Injectable } from '@nestjs/common';
import { TarefaEntity } from './entities/tarefa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TarefaDto } from './dto/Tarefa.dto';

@Injectable()
export class TarefaService {
    constructor(
        @InjectRepository(TarefaEntity)
        private readonly tarefaRepository: Repository<TarefaEntity> 
    ) {}

    async createTarefa(createTarefa: TarefaDto) {
        return await this.tarefaRepository.save({
            ...createTarefa
        });    
    }

    async findAllTarefa(): Promise<TarefaEntity[]> {
        return await this.tarefaRepository.find();
    }

    async updateTarefa(id: number, tarefa: TarefaDto): Promise<TarefaEntity[]> {
        await this.tarefaRepository.update(id, tarefa);
        return await this.tarefaRepository.find();
    }

    async deleteTarefa(id: number): Promise<TarefaEntity[]> {
        await this.tarefaRepository.delete(id);
        return await this.tarefaRepository.find();
    }
}
