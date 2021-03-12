import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import DocEnviados from './Documentos_Enviados';
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
  
    @ManyToOne(() => Turma, turma => turma.alunos,  { onDelete: 'CASCADE' })
    @JoinColumn({ name: "turma_id" })
    turma: Turma;

    @Column('varchar')
    turma_id: string;

    @OneToMany(() => DocEnviados, docEnviado => docEnviado.aluno)
    docEnviado: DocEnviados;
  }
  
  export default Alunos;