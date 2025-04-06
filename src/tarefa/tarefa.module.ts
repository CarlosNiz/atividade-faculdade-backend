import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';
import { TarefaEntity } from './entities/tarefa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TarefaEntity])],
  controllers: [TarefaController],
  providers: [TarefaService],
})
export class TarefaModule {}
