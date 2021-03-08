import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
import DocEnviados from './Documentos_Enviados';
import DocNecessarios from './Documentos_Enviados';
  import Enfase from './Enfase';
  import Modalidade from './Modalidade';
import Turma from './Turma';
  
  @Entity('cursos')
  class Curso {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar')
    nome: string;
  
    @Column('text')
    descricao: string;   

    @Column('int')
    modalidade_id: string;

    @ManyToOne(() => Modalidade, modalidade => modalidade.curso)
    modalidade: Modalidade;

    @Column('int')
    enfase_id: string;

    @ManyToOne(() => Enfase, enfase => enfase.curso)
    enfase: Enfase;


    @OneToMany(() => Turma, turma => turma.curso)
    turma: Turma;

    @OneToMany(() => DocNecessarios, docNecessarios => docNecessarios.curso)
    docNecessarios: DocNecessarios;

    @OneToMany(() => DocEnviados, docEnviados => docEnviados.curso)
    docEnviados: DocEnviados;

  }
  
  export default Curso;