import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import Curso from './Curso';
  
  @Entity('docNecessarios')
  class DocNecessarios {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar')
    descricao: string;   
  
    @ManyToOne(() => Curso, curso => curso.turma)
    @JoinColumn({ name: 'curso_id'} )
    curso: Curso;

    @Column('int')
    curso_ID: string;
  }
  
  export default DocNecessarios;