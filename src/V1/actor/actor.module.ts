import { Module } from '@nestjs/common';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';
import { ActorEntity } from './actor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ActorEntity])],
  controllers: [ActorController],
  providers: [ActorService]
})
export class ActorModule {}
