import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTarefa1743978617276 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE tarefa (
                id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                descricao TEXT NOT NULL,
                concluido BOOLEAN DEFAULT FALSE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE IF EXISTS tarefa;
        `);
    }
}
