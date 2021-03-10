import { Router } from 'express';

import alunosRoutes from './alunos.routes';

const routes = Router();

routes.use('/alunos', alunosRoutes);

export default routes;