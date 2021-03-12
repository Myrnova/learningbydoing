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
  
    @ManyToOne(() => Curso, curso => curso.docNecessarios, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'curso_id'} )
    curso: Curso;

    @Column('varchar')
    curso_id: string;
  }
  
  export default DocNecessarios;