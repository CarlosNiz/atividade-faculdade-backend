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
        return this.tarefaRepository.save({
            ...createTarefa
        });    
    }

    async findAllTarefa(): Promise<TarefaDto[]> {
        return this.tarefaRepository.find();
    }
}
