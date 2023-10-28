import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'eventos'})
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    details: string;
  
    @Column()
    date: string;
  
    @Column()
    title: string;
  
    @Column()
    category: string;
    
    @Column()
    place: string;
}
