import { Module } from '@nestjs/common';
import { SendEmailModule } from './send-email/send-email.module';
import { BullModule } from '@nestjs/bull';
import { NodemailerModule } from './nodemailer/nodemailer.module';

@Module({
  imports: [
    BullModule.forRoot({ redis: { host: 'redis', port: 6379 }, }),
    SendEmailModule,
    NodemailerModule,
  ]
})
export class RedisModule { }
