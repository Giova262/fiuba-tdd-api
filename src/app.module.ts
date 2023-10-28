import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

import { GeolocationModule } from './geolocation/geolocation.module';
import { Geolocation } from './geolocation/entities/geolocation.entity'
import { EventosModule } from './eventos/eventos.module';


@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'postgres',
      host: 'database',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      entities: [
        Geolocation,
        "src/modules/**/*.entity.{ts,js}"
      ],
      logging: true,
      synchronize: false // SI ESTA EN TRUE BORRA LA BASE DE DATOS! DEJARLO EN FALSE
    }),
    GeolocationModule,
    EventosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// ADD new modules with this command:  npx @nestjs/cli g resource eventos   -> eventos is a example
