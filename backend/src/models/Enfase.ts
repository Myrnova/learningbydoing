import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import Curso from './Curso';
  
  @Entity('enfases')
  class Enfase {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('text')
    descricao: string;

    @OneToMany(() => Curso, curso => curso.modalidade)
    curso: Curso;
  }
  
  export default Enfase;