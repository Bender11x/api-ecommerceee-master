import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProdutos1751635989682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('produtos', [
            new TableColumn({
                name: "quantidade",
                type: "int",
                isNullable: true,
                default: 0
            }),
            new TableColumn({
                name: "ncm",
                type: "char",
                length: '8',
                isNullable: false
            })
        ])
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("produtos",["quantidade", "ncm"])
    }

}
