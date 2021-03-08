import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';

import createConnection from './database';

createConnection();
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;