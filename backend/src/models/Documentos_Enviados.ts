import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import Alunos from './Alunos';
import Curso from './Curso';
  
  @Entity('docEnviados')
  class DocEnviados {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar')
    descricao: string;   
  
    @ManyToOne(() => Curso, curso => curso.docEnviado, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'curso_id'} )
    curso: Curso;

    @Column('varchar')
    curso_id: string;

    
    @ManyToOne(() => Alunos, aluno => aluno.docEnviado, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'aluno_id'} )
    aluno: Alunos;

    @Column('varchar')
    aluno_id: string;
  }
  
  export default DocEnviados;