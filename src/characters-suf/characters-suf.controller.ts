import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharactersSufService } from './characters-suf.service';
import { CreateCharactersSufDto } from './dto/CharacterDto';
import { UpdateCharactersSufDto } from './dto/update-characters-suf.dto';

@Controller('characters-suf')
export class CharactersSufController {
  constructor(private readonly charactersSufService: CharactersSufService) {}

  @Post()
  create(@Body() createCharactersSufDto: CreateCharactersSufDto) {
    return this.charactersSufService.create(createCharactersSufDto);
  }

  @Get()
  findAll() {
    return this.charactersSufService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charactersSufService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharactersSufDto: UpdateCharactersSufDto,
  ) {
    return this.charactersSufService.update(+id, updateCharactersSufDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersSufService.remove(+id);
  }
}
