import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import DocEnviados from './Documentos_Enviados';
import DocNecessarios from './Documentos_Necessarios';
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

    @Column('varchar')
    modalidade_id: string;

    @ManyToOne(() => Modalidade, modalidade => modalidade.curso, { onDelete: 'CASCADE' })
    @JoinColumn({name: 'modalidade_id'})
    modalidade: Modalidade;

    @Column('varchar')
    enfase_id: string;

    @ManyToOne(() => Enfase, enfase => enfase.curso, { onDelete: 'CASCADE' })
    @JoinColumn({name: 'enfase_id'})
    enfase: Enfase;

    @OneToMany(() => Turma, turma => turma.curso)
    turma: Turma;

    @OneToMany(() => DocNecessarios, docNecessarios => docNecessarios.curso)
    docNecessario: DocNecessarios;

    @OneToMany(() => DocEnviados, docEnviados => docEnviados.curso)
    docEnviado: DocEnviados;

  }
  
  export default Curso;