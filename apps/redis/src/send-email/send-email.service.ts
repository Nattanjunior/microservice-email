import { Injectable } from '@nestjs/common';
import { CreateSendEmailDto } from './dto/create-send-email.dto';
import { UpdateSendEmailDto } from './dto/update-send-email.dto';

@Injectable()
export class SendEmailService {
  senEmail(createSendEmailDto: CreateSendEmailDto) {
    return 'This action adds a new sendEmail';
  }

}
