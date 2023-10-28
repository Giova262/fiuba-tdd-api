import { Module } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { GeolocationController } from './geolocation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Geolocation } from './entities/geolocation.entity'


@Module({
  imports: [TypeOrmModule.forFeature([Geolocation])],
  controllers: [GeolocationController],
  providers: [GeolocationService]
})
export class GeolocationModule {}
