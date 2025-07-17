"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterProdutos1751635989682 = void 0;
const typeorm_1 = require("typeorm");
class AlterProdutos1751635989682 {
    async up(queryRunner) {
        await queryRunner.addColumns('produtos', [
            new typeorm_1.TableColumn({
                name: "quantidade",
                type: "int",
                isNullable: false,
                default: 0
            }),
            new typeorm_1.TableColumn({
                name: "ncm",
                type: "char",
                length: '8',
                isNullable: false
            })
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns("produtos", ["quantidade", "ncm"]);
    }
}
exports.AlterProdutos1751635989682 = AlterProdutos1751635989682;
