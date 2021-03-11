import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEnfases1615229507956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
   
        await queryRunner.createTable(
            new Table({
                name: 'enfases',
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
                        type: 'varchar'
                    }
                ]
                
            }),     
            true
   
    )
}

    public async down(queryRunner: QueryRunner): Promise<void> {
    
        await queryRunner.dropTable(`enfases`)    
    
    }

}
