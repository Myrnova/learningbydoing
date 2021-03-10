import { createConnection, getConnectionOptions, Connection, ConnectionOptions } from 'typeorm';
import Alunos from '../models/Alunos';
import Curso from '../models/Curso';
import Documentos_Enviados from '../models/Documentos_Enviados';
import Documentos_Necessarios from '../models/Documentos_Necessarios';
import Enfase from '../models/Enfase';
import Modalidade from '../models/Modalidade';
import Turma from '../models/Turma';  
import * as path from "path"


// const sqlite3 = require('sqlite3').verbose();


// class GettingDatabase{

//   public dbpath(){
//   return new sqlite3.Database(path.resolve(__dirname, "./database.db"));
//   };

//   public async typeormdb(): Promise<Connection> {
//       const options: ConnectionOptions = {
//         type: "sqlite",
//         database: path.resolve(__dirname, './database.db'),
//         entities: [ Alunos, Curso, Documentos_Enviados, Documentos_Necessarios, Enfase, Modalidade, Turma ],
//         logging: true,
//       }
//       return createConnection(options);
    
//     };
// }

// export default GettingDatabase;
export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database:
      path.resolve(__dirname, './database.db')
    }),
  );
};
