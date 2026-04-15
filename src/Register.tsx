import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase/config"

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
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
                <h1 className="auth-title">Register</h1>
                <p className="auth-subtitle">
                Crea tu cuenta para usar el sistema
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

                <button className="auth-button" onClick={handleRegister}>
                    Crear cuenta
                </button>
            </div>

            <p className="auth-link">
                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
            </div>
        </div>
    )
}

export default Register