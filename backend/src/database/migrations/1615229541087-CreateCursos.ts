import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCursos1615229541087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        queryRunner.createTable(
            new Table({
                name: 'cursos',
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
                        name: 'descricao',
                        type: 'text'
                    },
                    {
                        name: 'modalidade_id',
                        type: 'varchar'
                    },
                    {
                        name: 'enfase_id',
                        type: 'varchar'
                    }    
                    
            ]
            })
        )

        await queryRunner.createForeignKey(
            'cursos',
            new TableForeignKey({
              name: 'CursoEnfase',
              columnNames: ['enfase_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'enfases',
              onDelete: 'SET NULL',
            }),
          );
          await queryRunner.createForeignKey(
            'cursos',
            new TableForeignKey({
              name: 'CursoModalidade',
              columnNames: ['modalidade_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'modalidades',
              onDelete: 'SET NULL',
            }),
          );      
    
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('cursos', 'CursoModalidade');

        await queryRunner.dropForeignKey('cursos', 'CursoEnfase');
        
        await queryRunner.dropTable("cursos")
    }

}
