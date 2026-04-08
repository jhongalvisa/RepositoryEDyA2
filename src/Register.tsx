import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = async () => {
    if (!authContext) {
      return
    }

    setErrorMessage("")

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Debes escribir correo y contraseña")
      return
    }

    try {
      setLoading(true)
      await authContext.register(email, password)
      navigate("/dashboard")
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("Ocurrió un error al crear la cuenta")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-page container py-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card shadow-lg border-0 auth-card">
            <div className="card-body p-4 p-md-5">
              <span className="badge text-bg-success mb-3">Firebase Register</span>
              <h1 className="display-6 fw-bold mb-2">Crear cuenta</h1>
              <p className="text-secondary mb-4">
                Registra tu usuario y entra al dashboard.
              </p>

              <div className="mb-3">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              {errorMessage ? (
                <div className="alert alert-danger py-2">{errorMessage}</div>
              ) : null}

              <button className="btn btn-success w-100" onClick={handleRegister} disabled={loading}>
                {loading ? "Creando cuenta..." : "Crear cuenta"}
              </button>

              <p className="text-center text-secondary mt-4 mb-0">
                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register
