import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDocEnviados1615230622815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    
        queryRunner.createTable(
            new Table({
                name: 'docEnviados',
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
                        name: 'docNecessario_id',
                        type: 'varchar'
                    },
                    {
                        name: 'aluno_id',
                        type: 'varchar'
                    }            
            ]
            })
        )

        
        await queryRunner.createForeignKey(
            'docEnviados',
            new TableForeignKey({
              name: 'DocEnviadoAluno',
              columnNames: ['aluno_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'alunos',
              onDelete: 'SET NULL',
            }),
          );  

          await queryRunner.createForeignKey(
            'docEnviados',
            new TableForeignKey({
              name: 'DocEnviadoNecessario',
              columnNames: ['docNecessario_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'docNecessarios',
              onDelete: 'SET NULL',
            }),
          ); 
    
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.dropForeignKey('docEnviados', 'DocEnviadoNecessario');
    
        await queryRunner.dropForeignKey('docEnviados', 'DocEnviadoAluno');
        
        await queryRunner.dropTable("docEnviados")
    
    

}
}
