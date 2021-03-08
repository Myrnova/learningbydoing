import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

import Curso from './Curso'
  
  @Entity('modalidades')
  class Modalidade {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('text')
    descricao: string;
    
    @OneToMany(() => Curso, curso => curso.modalidade)
    curso: Curso;

  }
  
  export default Modalidade;