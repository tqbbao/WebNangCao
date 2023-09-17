import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'actor' })
export class ActorEntity {
  @PrimaryGeneratedColumn()
  actor_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
  @CreateDateColumn()
  last_update: Date;
}
