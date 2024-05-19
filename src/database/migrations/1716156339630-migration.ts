import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1716156339630 implements MigrationInterface {
    name = 'Migration1716156339630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" RENAME COLUMN "subject" TO "subject_id"`);
        await queryRunner.query(`ALTER TABLE "attendance" ADD "verify_by" character varying`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "parent_phone" character varying`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "parent_name" character varying`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "gender" character varying`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "height" character varying`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "subject_id"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD "subject_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_0d4aea6fb531a16d5f953f79000" FOREIGN KEY ("subject_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_0d4aea6fb531a16d5f953f79000"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP COLUMN "subject_id"`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD "subject_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "parent_name"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "parent_phone"`);
        await queryRunner.query(`ALTER TABLE "attendance" DROP COLUMN "verify_by"`);
        await queryRunner.query(`ALTER TABLE "schedule" RENAME COLUMN "subject_id" TO "subject"`);
    }

}
