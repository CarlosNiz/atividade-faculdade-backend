import { Body, Controller, Get, Post } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaDto } from './dto/Tarefa.dto';

@Controller('tarefa')
export class TarefaController {
  constructor(
    private readonly tarefaService: TarefaService
  ) {}

  @Post()
  createTarefa(@Body() createTarefa: TarefaDto): Promise<TarefaDto> {
    return this.tarefaService.createTarefa(createTarefa);
  }

  @Get()
  readTarefa(): Promise<TarefaDto[]> {
    return this.tarefaService.findAllTarefa();
  }
}
