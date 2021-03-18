import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTurma1615230576735 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'turmas',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,   
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'grade',
                        type: 'integer'
                    },                    
                    {
                        name: 'curso_id',
                        type: 'varchar'
                    }                    
            ]
            }), true)

        await queryRunner.createForeignKey(
            'turmas',
            new TableForeignKey({
              name: 'TurmaCurso',
              columnNames: ['curso_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'cursos'
            }),
          );      
    
   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('turmas', 'TurmaCurso');
        
        await queryRunner.dropTable("turmas")
    }

}
