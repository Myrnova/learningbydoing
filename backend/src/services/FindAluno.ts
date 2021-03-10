import { getCustomRepository, getRepository } from 'typeorm'; // getRepository quando nao tem repositories e getCustomRepository quando voce criou um arquivo de repository
import Alunos from '../models/Alunos';
import Curso from '../models/Curso';
import DocEnviados from '../models/Documentos_Enviados';


interface Request {
  login: string;
  password: string;
}

class FindAluno {
  public async execute({
    login,
    password,
  }: Request): Promise<any> {
    const alunosRepository = getRepository(Alunos);
    const cursoRepository = getRepository(Curso);
    const docEnviados = getRepository(DocEnviados);

    if (!login || !password) {
      throw new Error('Need to inform all 3 information requested');
    }

    let aluno = await alunosRepository.findOne({
      where: { login: login, password: password },
    });

    // if (!categoryToSave) {
    //   categoryToSave = categoryRepository.create({
    //     title: category,
    //   });
    //   await categoryRepository.save(categoryToSave);
    // }
    // const transaction = transactionRepository.create({
    //   title,
    //   type,
    //   value,
    //   category: categoryToSave,
    // });
    // await transactionRepository.save(transaction);
    return aluno;
  }
}

export default FindAluno;