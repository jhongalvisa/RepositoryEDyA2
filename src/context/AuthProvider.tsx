import { type ReactNode } from "react"
import useAuth from "../hooks/useAuth"
import { AuthContext } from "./AuthContext"

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, login, register, logout } = useAuth()

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}