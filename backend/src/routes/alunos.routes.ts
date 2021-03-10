/* eslint-disable no-param-reassign */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import GettingDatabase from '../database';
import Alunos from '../models/Alunos';
import Modalidade from '../models/Modalidade';
import { v4 } from 'uuid';
import Enfase from '../models/Enfase';

const alunoRouter = Router();


interface ModalidadeSelect {
  id: string,
  descricao: string;
}

alunoRouter.get('/', async (request, response) => {


  const alunoRepository = getRepository(Alunos);
  const modalidadeRepository = getRepository(Modalidade);
  const enfaseRepository = getRepository(Enfase);

  let modalidade = await enfaseRepository.find(); 
  
  console.log(modalidade);
  return response.json(modalidade);

});

alunoRouter.post('/', async (request, response) => {
});

export default alunoRouter;