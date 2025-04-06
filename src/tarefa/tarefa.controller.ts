import { Body, Controller, Post } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { CreateTarefaDto } from './dto/createTarefa.dto';

@Controller('tarefa')
export class TarefaController {
  constructor(
    private readonly tarefaService: TarefaService
  ) {}

  @Post()
  createTarefa(@Body() createTarefa: CreateTarefaDto): Promise<CreateTarefaDto> {
    return this.tarefaService.createTarefa(createTarefa);
  }
}
