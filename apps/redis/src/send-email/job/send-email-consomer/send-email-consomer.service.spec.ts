import { Test, TestingModule } from '@nestjs/testing';
import { SendEmailConsomerService } from './send-email-consomer.service';

describe('SendEmailConsomerService', () => {
  let service: SendEmailConsomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendEmailConsomerService],
    }).compile();

    service = module.get<SendEmailConsomerService>(SendEmailConsomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
