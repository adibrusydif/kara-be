import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715351940145 implements MigrationInterface {
    name = 'Migration1715351940145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_2b0a3ff1a1b98d455c0053b1674"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "REL_2b0a3ff1a1b98d455c0053b167"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_2b0a3ff1a1b98d455c0053b1674" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_2b0a3ff1a1b98d455c0053b1674"`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "REL_2b0a3ff1a1b98d455c0053b167" UNIQUE ("class_id")`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_2b0a3ff1a1b98d455c0053b1674" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
