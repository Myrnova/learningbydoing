import { createConnection, getConnectionOptions, Connection } from 'typeorm';
import sqlite3 from 'sqlite3';
export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database:
      new sqlite3.Database('./database/database.db')
    }),
  );
};
