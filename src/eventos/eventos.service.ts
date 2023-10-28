import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';


import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity'


@Injectable()
export class EventosService {

  constructor(@InjectRepository(Evento) private geolocationRepository: Repository<Evento>) { }
  create(createEventoDto: CreateEventoDto) {
    return 'This action adds a new evento';
  }

  async findAll() {
    return await this.geolocationRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
