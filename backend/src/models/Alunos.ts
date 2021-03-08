import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
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
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    @ManyToOne(() => Curso, curso => curso.turma)
    @JoinColumn({ name: "curso_id" })
    curso: Curso;

    @Column('int')
    curso_id: string;
  }
  
  export default Turma;