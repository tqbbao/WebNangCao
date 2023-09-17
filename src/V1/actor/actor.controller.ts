import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ActorEntity } from './actor.entity';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { FilterActorDto } from './dto/filter-actor.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Actor')
@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}
  @Get(':id')
  findById(@Param('id') actor_id: number): Promise<ActorEntity> {
    console.log('findById API');
    return this.actorService.findById(actor_id);
  }

  @ApiQuery({ name: 'page', allowEmptyValue: true })
  @ApiQuery({ name: 'items_per_page', allowEmptyValue: true })
  @ApiQuery({ name: 'keyword', allowEmptyValue: true })
  @Get()
  findAll(@Query() query: FilterActorDto): Promise<ActorEntity[]> {
    console.log('findAll API');
    return this.actorService.findAll(query);
  }

  // * POST
  @Post()
  create(@Body() createActorDto: CreateActorDto): Promise<ActorEntity> {
    console.log('create API');
    return this.actorService.create(createActorDto);
  }

  // * PUT
  @Put(':id')
  update(
    @Param('id') actor_id: number,
    @Body() updateActorDto: UpdateActorDto,
  ) {
    return this.actorService.update(actor_id, updateActorDto);
  }

  // * DELETE
  @Delete(':id')
  delete(@Param('id') actor_id: number) {
    return this.actorService.delete(actor_id);
  }
}
