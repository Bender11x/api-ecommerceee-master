"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1752060426684 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1752060426684 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "usuarios",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("usuarios");
    }
}
exports.CreateUser1752060426684 = CreateUser1752060426684;
