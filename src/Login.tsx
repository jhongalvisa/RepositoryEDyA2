import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase/config"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/explorer")
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1 className="auth-title">Login</h1>
                <p className="auth-subtitle">
                    Ingresa para gestionar carpetas y archivos
                </p>

            <div className="auth-form">
                <input
                    className="auth-input"
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="auth-input"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="auth-button" onClick={handleLogin}>
                    Iniciar sesión
                </button>
            </div>

            <p className="auth-link">
                ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </p>
            </div>
        </div>
    )
}

export default Login