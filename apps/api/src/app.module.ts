import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    UsersModule,
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
