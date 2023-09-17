import { IsNotEmpty } from 'class-validator';

export class CreateActorDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;
}
