import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import Curso from './Curso';
  
  @Entity('turmas')
  class Turma {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar')
    title: string;
  
    @ManyToOne(() => Curso, curso => curso.turma)
    curso: Curso;

    @Column('int')
    curso_id: string;
  }
  
  export default Turma;