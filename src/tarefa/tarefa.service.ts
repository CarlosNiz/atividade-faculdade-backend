import { Injectable } from '@nestjs/common';
import { TarefaEntity } from './entities/tarefa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTarefaDto } from './dto/createTarefa.dto';

@Injectable()
export class TarefaService {
    constructor(
        @InjectRepository(TarefaEntity)
        private readonly tarefaRepository: Repository<TarefaEntity> 
    ) {}

    async createTarefa(createTarefa: CreateTarefaDto) {
        return this.tarefaRepository.save({
            ...createTarefa
        });    
    }
}
