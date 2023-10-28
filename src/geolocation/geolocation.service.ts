import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { CreateGeolocationDto } from './dto/create-geolocation.dto';
import { UpdateGeolocationDto } from './dto/update-geolocation.dto';
import { Geolocation } from './entities/geolocation.entity'

@Injectable()
export class GeolocationService {

  constructor(@InjectRepository(Geolocation) private geolocationRepository: Repository<Geolocation>) { }

  create(createGeolocationDto: CreateGeolocationDto) {
    return 'This action adds a new geolocation';
  }

  async findAll(): Promise<any> {
    return await this.geolocationRepository.find();
  }

  async findOne(_id: number): Promise<any> {
    return await this.geolocationRepository.find({
      select: ["id"],
      where: [{"id": _id}]
    });
  }

  update(id: number, updateGeolocationDto: UpdateGeolocationDto) {
    return `This action updates a #${id} geolocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} geolocation`;
  }
}
