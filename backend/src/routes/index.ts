import { Router } from 'express';

import alunosRoutes from './alunos.routes';

const routes = Router();

routes.use('/transactions', alunosRoutes);

export default routes;