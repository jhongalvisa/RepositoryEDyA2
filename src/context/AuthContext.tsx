import { createContext } from "react"

export type AuthUser = {
  uid: string
  email: string
}

export type AuthContextType = {
  user: AuthUser | null
  login: (email: string, password: string) => Promise<unknown>
  register: (email: string, password: string) => Promise<unknown>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)