import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './SUF/characters/characters.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, CharactersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
