import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SendEmailModule } from './send-email/send-email.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({ redis: { host: 'redis', port: 6379 }, }),
    BullModule.registerQueue( { name: 'SEND_EMAIL_QUEUE'}),
    UsersModule,
    SendEmailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
