import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './V1/actor/actor.module';
import { AuthModule } from './V1/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './V1/actor/actor.entity';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '0.0.0.0',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test-sakila',
    entities: [ActorEntity],
    // logger: 'advanced-console',
    // logging: 'all',
    synchronize: false,
    }),
    ActorModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
