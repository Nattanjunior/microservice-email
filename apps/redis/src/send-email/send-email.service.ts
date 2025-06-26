import { Injectable } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send-email.dto';
import { UpdateSendEmailDto } from './dto/update-send-email.dto';
import { SendEmailQueueService } from './job/send-email-queue/send-email-queue.service';

@Injectable()
export class SendEmailService {
  constructor(private readonly sendEmailQueueService: SendEmailQueueService) {}

  async senEmail(createSendEmailDto: CreateSendEmailDto) {
    const { name, email } = createSendEmailDto;
    await this.sendEmailQueueService.add({ name, email });
  }
}
