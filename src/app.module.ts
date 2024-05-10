import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MiddlewareModule } from './middleware/middleware.module';


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
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
