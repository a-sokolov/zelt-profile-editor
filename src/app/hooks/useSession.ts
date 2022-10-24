import { useCallback, useState } from 'react';

type UseSessionResult = {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
};

export const useSession = (): UseSessionResult => {
  const [isLogged, setIsLogged] = useState(false);

  const login = useCallback(() => {
    setIsLogged(true);
  }, []);

  const logout = useCallback(() => {
    setIsLogged(false);
  }, []);

  return {
    isLogged,
    login,
    logout,
  };
};
