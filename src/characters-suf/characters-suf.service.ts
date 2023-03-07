import { Injectable } from '@nestjs/common';
import { CreateCharactersSufDto } from './dto/CharacterDto';
import { UpdateCharactersSufDto } from './dto/update-characters-suf.dto';

@Injectable()
export class CharactersSufService {
  create(createCharactersSufDto: CreateCharactersSufDto) {
    return 'This action adds a new charactersSuf';
  }

  findAll() {
    return `This action returns all charactersSuf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} charactersSuf`;
  }

  update(id: number, updateCharactersSufDto: UpdateCharactersSufDto) {
    return `This action updates a #${id} charactersSuf`;
  }

  remove(id: number) {
    return `This action removes a #${id} charactersSuf`;
  }
}
