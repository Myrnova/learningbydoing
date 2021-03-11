import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDocNecessarios1615230567464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        queryRunner.createTable(
            new Table({
                name: 'docNecessarios',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        isGenerated: true,   
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'descricao',
                        type: 'text'
                    },                    
                    {
                        name: 'curso_id',
                        type: 'varchar'
                    }                    
            ]
            }),
            true
        )

        
        await queryRunner.createForeignKey(
            'docNecessarios',
            new TableForeignKey({
              name: 'DocNecessarioCurso',
              columnNames: ['curso_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'cursos',
              onDelete: 'SET NULL',
            }),
          );  
    
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
    
        await queryRunner.dropForeignKey('docNecessarios', 'DocNecessarioCurso');
        
        await queryRunner.dropTable("docNecessarios")
    
    
    }

}
