import { createContext, useMemo, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logOut: () => void;
}
interface IAuthProviderProps {
  children: any;
}

const defaultValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC<IAuthProviderProps> = (props) => {
  const { children } = props;
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const login = () => setAuthenticated(true);
  const logOut = () => setAuthenticated(false);
  const authSetting = useMemo(() => ({ authenticated, login, logOut }), []);
  return (
    <AuthContext.Provider value={authSetting}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
