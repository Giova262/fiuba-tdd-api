import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "body_backend_user",
      "password": "body2668",
      "database": "body_backend",
      "entities": [
        "src/modules/**/*.entity.{ts,js}"
      ],
      "synchronize": false // SI ESTA EN TRUE BORRA LA BASE DE DATOS! DEJARLO EN FALSE
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
