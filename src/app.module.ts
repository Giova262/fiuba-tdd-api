import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

import { EventosModule } from './eventos/eventos.module';
import { Evento } from './eventos/entities/evento.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      entities: [Evento, 'src/modules/**/*.entity.{ts,js}'],
      logging: true,
      synchronize: false, // SI ESTA EN TRUE BORRA LA BASE DE DATOS! DEJARLO EN FALSE
    }),
    EventosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// ADD new modules with this command:  npx @nestjs/cli g resource eventos   -> eventos is a example
// ADD permiss when vscode cant write:  chown -R node:node /app/
