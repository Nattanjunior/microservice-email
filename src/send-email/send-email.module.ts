import { Module } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { SendEmailProvider } from './send-email-provider';
import { SendEmailConsomerService } from './job/send-email-consomer/send-email-consomer.service';
import { SendEmailQueueService } from './job/send-email-queue/send-email-queue.service';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [BullModule.registerQueue({ name: 'SEND_EMAIL_QUEUE' }),],
  providers: [
    SendEmailService,
    SendEmailProvider,
    SendEmailConsomerService,
    SendEmailQueueService
  ],
  exports: [SendEmailQueueService]
})
export class SendEmailModule { }
