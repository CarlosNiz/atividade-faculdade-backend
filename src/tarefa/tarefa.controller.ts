import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaDto } from './dto/Tarefa.dto';
import { TarefaEntity } from './entities/tarefa.entity';

@Controller('tarefa')
export class TarefaController {
  constructor(
    private readonly tarefaService: TarefaService
  ) {}

  @Post() 
  async createTarefa(@Body() createTarefa: TarefaDto): Promise<TarefaDto> {
    return await this.tarefaService.createTarefa(createTarefa);
  }

  @Get()
  async readTarefa(): Promise<TarefaEntity[]> {
    return await this.tarefaService.findAllTarefa();
  }

  @Put(':id')
  async updateTarefa(@Param('id') id: number, @Body() tarefa: TarefaDto ): Promise<TarefaEntity[]> {
    return await this.tarefaService.updateTarefa(id, tarefa);
  }

  @Delete(':id')
  async deleteTarefa(@Param('id') id: number): Promise<TarefaEntity[]> {
    return await this.tarefaService.deleteTarefa(id);
  }
}
