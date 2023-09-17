import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActorEntity } from './actor.entity';
import { DeleteResult, Like, Repository, UpdateResult } from 'typeorm';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { FilterActorDto } from './dto/filter-actor.dto';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private actorRepository: Repository<ActorEntity>,
  ) {}

  async findAll(query: FilterActorDto): Promise<any> {
    const items_per_page = Number(query.items_per_page);
    const page = Number(query.page) || 1;
    const skip = (page - 1) * items_per_page;
    const [res, total] = await this.actorRepository.findAndCount({
      order: { last_update: 'DESC' },
      take: items_per_page,
      skip: skip,
      select: ['actor_id', 'first_name', 'last_name', 'last_update'],
    });

    const lastPage = Math.ceil(total / items_per_page);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;

    return {
      data: res,
      total,
      currentPage: page,
      nextPage,
      prevPage,
      lastPage,
    };
  }

  async findById(actor_id: number): Promise<ActorEntity | null> {
    const foundActor = await this.actorRepository.findOneBy({
      actor_id: actor_id,
    });
    return foundActor;
  }

  async create(createActorDto: CreateActorDto): Promise<ActorEntity> {
    return await this.actorRepository.save(createActorDto);
  }

  async update(
    actor_id: number,
    updateActorDto: UpdateActorDto,
  ): Promise<UpdateResult> {
    return await this.actorRepository.update(actor_id, updateActorDto);
  }

  async delete(actor_id: number): Promise<DeleteResult> {
    return await this.actorRepository.delete(actor_id);
  }
}
