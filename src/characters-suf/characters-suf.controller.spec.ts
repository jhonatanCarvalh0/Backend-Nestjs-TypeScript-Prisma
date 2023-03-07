import { Test, TestingModule } from '@nestjs/testing';
import { CharactersSufController } from './characters-suf.controller';
import { CharactersSufService } from './characters-suf.service';

describe('CharactersSufController', () => {
  let controller: CharactersSufController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersSufController],
      providers: [CharactersSufService],
    }).compile();

    controller = module.get<CharactersSufController>(CharactersSufController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
