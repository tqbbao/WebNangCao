import { IsNotEmpty } from "class-validator";

export class UpdateActorDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;
}
