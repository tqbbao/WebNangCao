import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: true,
    methods: 'GET, PUT, DELETE, POST',
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Actor example')
    .setDescription('The actos API description')
    .setVersion('1.0')
    .addTag('Actor')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documents', app, document);
  await app.listen(5100);
}
bootstrap();
