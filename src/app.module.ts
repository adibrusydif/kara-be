import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareModule } from './middleware/middleware.module';
import { ClassModule } from './modules/class/class.module';
import { SubjectModule } from './modules/subject/subject.module';
import { ScheduleModule } from './modules/class/schedule.module';


@Module({
  imports: [
    MiddlewareModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db-kara',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'kara',
    entities: entities,
    synchronize: false,
    },
  ),
    UserModule,
    AuthModule,
    ClassModule,
    SubjectModule,
    ScheduleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
