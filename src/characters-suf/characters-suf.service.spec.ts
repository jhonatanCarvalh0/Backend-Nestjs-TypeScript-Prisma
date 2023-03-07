import { Test, TestingModule } from '@nestjs/testing';
import { CharactersSufService } from './characters-suf.service';

describe('CharactersSufService', () => {
  let service: CharactersSufService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersSufService],
    }).compile();

    service = module.get<CharactersSufService>(CharactersSufService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
