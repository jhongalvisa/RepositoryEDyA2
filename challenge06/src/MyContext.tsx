import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { useAuth } from "./UseAuth";

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const { user, login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}