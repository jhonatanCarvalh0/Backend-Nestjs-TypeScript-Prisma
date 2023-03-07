import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CharacterDto } from './dto/Character.dto';
import { Character } from './interfaces/character.interface';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.characters.findMany({});
  }

  async findById(id: string): Promise<Character> {
    console.log(id);

    const character = await this.prisma.characters.findUnique({
      where: { id },
    });

    if (!character) {
      throw new NotFoundException(`Character with id ${id} not found`);
    }

    return character;
  }

  async create(body: CharacterDto) {
    await this.prisma.characters.create({ data: body });
    return;
  }

  async update(id: string, body: CharacterDto) {
    const character = await this.prisma.characters.update({
      where: { id },
      data: body,
    });

    if (!character) {
      throw new NotFoundException(`Character with id ${id} not found`);
    }

    return;
  }

  async remove(id: string) {
    const character = await this.prisma.characters.delete({
      where: { id },
    });

    if (!character) {
      throw new NotFoundException(`Character with id ${id} not found`);
    }

    return;
  }
}
