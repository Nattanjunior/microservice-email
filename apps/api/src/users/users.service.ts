import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class UsersService {
  constructor(private readonly redisService: RedisService) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;

    this.redisService.redis.emit('CREATE_SEND_EMAIL', { name, email });

    return { name, email };
  }
}
