import { useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "../firebase/config"

type AuthUser = {
  uid: string
  email: string
}

export default function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      return JSON.parse(storedUser)
    }

    return null
  })

  const login = async (email: string, password: string) => {
    const response = await signInWithEmailAndPassword(auth, email, password)

    const userData = {
      uid: response.user.uid,
      email: response.user.email || email,
    }

    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))

    return response
  }

  const register = async (email: string, password: string) => {
    const response = await createUserWithEmailAndPassword(auth, email, password)

    const userData = {
      uid: response.user.uid,
      email: response.user.email || email,
    }

    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))

    return response
  }

  const logout = async () => {
    await signOut(auth)
    setUser(null)
    localStorage.removeItem("user")
  }

  return { user, login, register, logout }
}
