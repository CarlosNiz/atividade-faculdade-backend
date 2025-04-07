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
  async readTarefa(): Promise<TarefaDto[]> {
    const tarefas = await this.tarefaService.findAllTarefa();
    return tarefas.map(i => new TarefaDto(i));
  }

  @Put(':id')
  async updateTarefa(@Param('id') id: number, @Body() tarefa: TarefaDto ): Promise<TarefaDto[]> {
    const novaTarefa = await this.tarefaService.updateTarefa(id, tarefa);
    return novaTarefa.map(i => new TarefaDto(i));
  }

  @Delete(':id')
  async deleteTarefa(@Param('id') id: number): Promise<TarefaDto[]> {
    const novaLista = await this.tarefaService.deleteTarefa(id);
    return novaLista.map(i => new TarefaDto(i));
  }
}
