import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharacterDto } from './dto/Character.dto';

@Controller('characters')
export class CharactersController {
  constructor(private characterService: CharactersService) {}

  @Get()
  findAll() {
    return this.characterService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.characterService.findById(params.id);
  }

  @Post()
  create(@Body() characterDto: CharacterDto) {
    return this.characterService.create(characterDto);
  }

  @Put(':id')
  update(@Param() params, @Body() characterDto: CharacterDto) {
    return this.characterService.update(params.id, characterDto);
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.characterService.remove(params.id);
  }
}
