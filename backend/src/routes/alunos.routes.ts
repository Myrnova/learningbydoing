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
 const modalidadeRepository = getRepository(Modalidade);
 const enfaseRepository = getRepository(Enfase);
 const cursoRepository = getRepository(Curso);
 const turmaRepository = getRepository(Turma);
 const docNecessariosRepository = getRepository(DocNecessarios);

  let enfase = await enfaseRepository.findOne({descricao: "Bacharelado"}); 
  let modalidade = await modalidadeRepository.findOne({descricao: "Ensino presencial"});  
  let curso =  await cursoRepository.findOne({nome: "Engenharia de computação"})
  let turma = await turmaRepository
      .createQueryBuilder()
      .leftJoin('Curso', 'cursos')
      .where('cursos.id = :id', { id: curso?.id })
      .getOne();
  let docNecessarios = await docNecessariosRepository.find();  
  
  return response.json({modalidade, enfase, curso, turma, docNecessarios});

});

interface TurmaProps {
  grade: number,
  id: string,
  curso_id: string 

}

alunoRouter.post('/', async (request, response) => {          
 try {
        
  let turma = await getRepository(Turma)
      .createQueryBuilder()
      .leftJoin('Curso', 'cursos')
      .where('cursos.nome = :nome', { nome: "Engenharia de computação" })
      .getOne();
      console.log(turma);
  let aluno = {
    nome: "Débora Cristina Cavallari",
    
    password: "assa1223",   
  
    email: "debora.cavallari@hotmail.com",

    turma_id: turma?.id

  };

    await getRepository(Alunos).save(aluno)
    return response.json(await getRepository(Alunos).find());
 } catch (error) {
   console.log(error);
 }
});

export default alunoRouter;