import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async () => {
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
      await authContext.login(email, password)
      navigate("/dashboard")
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("Ocurrió un error al iniciar sesión")
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
              <span className="badge text-bg-primary mb-3">Firebase Login</span>
              <h1 className="display-6 fw-bold mb-2">Iniciar sesión</h1>
              <p className="text-secondary mb-4">
                Entra con Firebase para ir a tu dashboard.
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

              <button className="btn btn-primary w-100" onClick={handleLogin} disabled={loading}>
                {loading ? "Entrando..." : "Login"}
              </button>

              <p className="text-center text-secondary mt-4 mb-0">
                ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
