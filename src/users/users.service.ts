import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SendEmailQueueService } from '../send-email/job/send-email-queue/send-email-queue.service';

@Injectable()
export class UsersService {
  constructor(private readonly sendEmailQueueService: SendEmailQueueService) { }

  async create(createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;

    await this.sendEmailQueueService.execute({ name, email });

    return { name, email };
  }
}
