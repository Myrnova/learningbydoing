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
import Alunos from './Alunos';
import Curso from './Curso';
  
  @Entity('turmas')
  class Turma {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('int')
    grade: number;
  
    @ManyToOne(() => Curso, curso => curso.turma)
    @JoinColumn({ name: 'curso_id'})
    curso: Curso;

    @OneToMany(() => Alunos, aluno => aluno.turma)
    alunos: Alunos

    @Column('varchar')
    curso_id: string;
  }
  
  export default Turma;