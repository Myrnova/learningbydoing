import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAlunos1615230615607 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.createTable(
            new Table({
                name: 'alunos',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,   
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    }, 
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },                   
                    {
                        name: 'turma_id',
                        type: 'varchar'
                    }                    
            ]
            }), true)

        await queryRunner.createForeignKey(
            'alunos',
            new TableForeignKey({
              name: 'AlunoTurma',
              columnNames: ['turma_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'turmas'
            }),
          );   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.dropForeignKey('alunos', 'AlunoTurma');
        
        await queryRunner.dropTable("alunos")
    
    
    }

}
