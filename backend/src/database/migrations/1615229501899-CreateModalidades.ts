import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateModalidades1615229501899 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      
        await queryRunner.createTable(
            new Table({
                name: 'modalidades',
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
    
        await queryRunner.dropTable(`modalidades`)    
    
    }

}
