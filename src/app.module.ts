import { Module } from '@nestjs/common';
import { TarefaModule } from './tarefa/tarefa.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TarefaModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
