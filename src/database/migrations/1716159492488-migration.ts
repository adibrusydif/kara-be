import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1716159492488 implements MigrationInterface {
    name = 'Migration1716159492488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_cfacddd81efeda13acadb93d42b"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "REL_cfacddd81efeda13acadb93d42"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_cfacddd81efeda13acadb93d42b" FOREIGN KEY ("teacher_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_cfacddd81efeda13acadb93d42b"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "REL_cfacddd81efeda13acadb93d42" UNIQUE ("teacher_id")`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_cfacddd81efeda13acadb93d42b" FOREIGN KEY ("teacher_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
