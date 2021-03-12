/* eslint-disable no-param-reassign */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import Alunos from '../models/Alunos';
import Modalidade from '../models/Modalidade';
import { v4 } from 'uuid';
import Enfase from '../models/Enfase';
import Curso from '../models/Curso';
import Turma from '../models/Turma';
import DocNecessarios from '../models/Documentos_Necessarios';



const alunoRouter = Router();


interface ModalidadeSelect {
  id: string,
  descricao: string;
}
 

alunoRouter.get('/', async (request, response) => {

  
  const alunoRepository = getRepository(Alunos);
  let aluno = await alunoRepository
      .createQueryBuilder("alunos")
      .leftJoinAndSelect('alunos.turma', 'turmas')
      .leftJoinAndSelect('turmas.curso', 'cursos')     
      .leftJoinAndSelect('cursos.modalidade', 'modalidades')
      .leftJoinAndSelect('cursos.enfase', 'enfases')
      .leftJoinAndSelect('cursos.docNecessario', 'docNecessarios')    
      .getMany();

  return response.json(aluno);

});

interface TurmaProps {
  grade: number,
  id: string,
  curso_id: string 

}

alunoRouter.post('/', async (request, response) => {          
 try {
        
  let aluno = await getRepository(Alunos)
      .createQueryBuilder("alunos")
      .leftJoinAndSelect('alunos.turma', 'turmas')
      .leftJoinAndSelect('turmas.curso', 'cursos')     
      .leftJoinAndSelect('cursos.modalidade', 'modalidades')
      .leftJoinAndSelect('cursos.enfase', 'enfases')
      .leftJoinAndSelect('cursos.docNecessario', 'docNecessarios')    
      .getOne();
    
      
      return response.json(aluno);

 } catch (error) {
   console.log(error);
 }
});

export default alunoRouter;