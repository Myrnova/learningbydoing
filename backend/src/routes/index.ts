import { Router } from 'express';

import alunosRoutes from './aluno.routes';
import loginRoutes from './login.routes';

const routes = Router();

routes.use('/alunos', alunosRoutes);
routes.use('/login', loginRoutes);

export default routes;