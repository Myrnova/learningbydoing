import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import Curso from './Curso';
  
  @Entity('docEnviados')
  class DocEnviados {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar')
    descricao: string;   
  
    @ManyToOne(() => Curso, curso => curso.turma)
    @JoinColumn({ name: 'curso_id'} )
    curso: Curso;

    @Column('int')
    curso_id: string;
  }
  
  export default DocEnviados;