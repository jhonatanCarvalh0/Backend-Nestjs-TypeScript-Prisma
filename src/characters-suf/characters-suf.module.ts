import { Module } from '@nestjs/common';
import { CharactersSufService } from './characters-suf.service';
import { CharactersSufController } from './characters-suf.controller';

@Module({
  controllers: [CharactersSufController],
  providers: [CharactersSufService]
})
export class CharactersSufModule {}
