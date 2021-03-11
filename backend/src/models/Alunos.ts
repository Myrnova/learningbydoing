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
import Turma from './Turma';
  
  @Entity('alunos')
  class Alunos {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar')
    nome: string;
    
    @Column('varchar')
    password: string;
    
    @Column('varchar')
    email: string;    
  
    @ManyToOne(() => Turma, turma => turma.alunos)
    @JoinColumn({ name: "turma_id" })
    turma: Turma;

    @Column('varchar')
    turma_id: string;
  }
  
  export default Alunos;