import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  login: string;
  password: string;
}

interface IAuthContext {
  user: object;
  signIn(credential: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LearnByDoing:token');
    const user = localStorage.getItem('@LearnByDoing:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    await api
      .post<{ message: string; url: string; status: string }>(
        'api/loginAPP',
        JSON.stringify({
          login,
          password,
        }),
      )
      .then(response => {
        const { url } = response.data;

        if (url) {
          // localStorage.setItem('@CTGIS:id', login);

          window.location.assign(url);
        }
      })
      .catch(err => {
        throw err;
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CTGIS:token');
    localStorage.removeItem('@CTGIS:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Sem contexto na autenticação');
  }

  return context;
}
