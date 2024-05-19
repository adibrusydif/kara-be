import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1716159843095 implements MigrationInterface {
    name = 'Migration1716159843095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_0d4aea6fb531a16d5f953f79000"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_0d4aea6fb531a16d5f953f79000" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_0d4aea6fb531a16d5f953f79000"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_0d4aea6fb531a16d5f953f79000" FOREIGN KEY ("subject_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
