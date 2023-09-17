import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class ActorDto {
  @Expose()
  actor_id: number;

  @IsNotEmpty()
  @Expose()
  first_name: string;

  @IsNotEmpty()
  @Expose()
  last_name: string;

  @Expose()
  last_update: Date;
}
