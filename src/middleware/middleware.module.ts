import { MiddlewareConsumer, Module, NestModule,RequestMethod } from '@nestjs/common';
import { MiddlewareService } from './middleware.service';
import { MiddlewareController } from './middleware.controller';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [JwtModule.register({
    secret: 'secret', // Same secret as used when issuing the token
    signOptions: { expiresIn: '30d'},
  })],
  controllers: [MiddlewareController],
  providers: [MiddlewareService],
})
export class MiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddlewareService).exclude(
      { path: 'auth/login', method: RequestMethod.POST },
      { path: 'auth/register', method: RequestMethod.POST }
    ).forRoutes('*');
  }
}
