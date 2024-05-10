import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715197836452 implements MigrationInterface {
    name = 'Migration1715197836452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "attendance" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "profile_id" integer NOT NULL, "schedule_id" integer NOT NULL, "time" TIMESTAMP, CONSTRAINT "REL_a64a9ade5eb944dcb7dd4f4b5e" UNIQUE ("profile_id"), CONSTRAINT "PK_ee0ffe42c1f1a01e72b725c0cb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "start_time" TIMESTAMP, "end_time" TIMESTAMP, "class_id" integer NOT NULL, "subject" character varying NOT NULL, "teacher_id" integer NOT NULL, "room" character varying NOT NULL, "info" character varying NOT NULL, CONSTRAINT "REL_cfacddd81efeda13acadb93d42" UNIQUE ("teacher_id"), CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "nim" character varying, "name" character varying, "phone" character varying, "address" character varying, "image" character varying, "school" character varying, "birthdate" TIMESTAMP, "class_id" integer, CONSTRAINT "REL_2b0a3ff1a1b98d455c0053b167" UNIQUE ("class_id"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "role" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profile_id" integer NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_f44d0cd18cfd80b0fed7806c3b" UNIQUE ("profile_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "module" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_0e20d657f968b051e674fbe3117" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "attendance" ADD CONSTRAINT "FK_21dbd188065aa30f598b9df08d0" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "attendance" ADD CONSTRAINT "FK_a64a9ade5eb944dcb7dd4f4b5eb" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_9163c65684f39efd6fce48b857b" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_cfacddd81efeda13acadb93d42b" FOREIGN KEY ("teacher_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_2b0a3ff1a1b98d455c0053b1674" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_f44d0cd18cfd80b0fed7806c3b7" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_f44d0cd18cfd80b0fed7806c3b7"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_2b0a3ff1a1b98d455c0053b1674"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_cfacddd81efeda13acadb93d42b"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_9163c65684f39efd6fce48b857b"`);
        await queryRunner.query(`ALTER TABLE "attendance" DROP CONSTRAINT "FK_a64a9ade5eb944dcb7dd4f4b5eb"`);
        await queryRunner.query(`ALTER TABLE "attendance" DROP CONSTRAINT "FK_21dbd188065aa30f598b9df08d0"`);
        await queryRunner.query(`DROP TABLE "module"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "schedule"`);
        await queryRunner.query(`DROP TABLE "attendance"`);
    }

}
