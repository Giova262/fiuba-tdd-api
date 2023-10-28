import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

import { GeolocationModule } from './geolocation/geolocation.module';
import { Geolocation } from './geolocation/entities/geolocation.entity'


@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      entities: [
        Geolocation,
        "src/modules/**/*.entity.{ts,js}"
      ],
      database: 'pgWithNest',
      logging: true,
      synchronize: false // SI ESTA EN TRUE BORRA LA BASE DE DATOS! DEJARLO EN FALSE
    }),
    GeolocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
