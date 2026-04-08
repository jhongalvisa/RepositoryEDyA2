import { useContext, type ReactNode } from "react"
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Challenge04Page from "./challenge04/Challenge04Page"
import Challenge05Page from "./challenge05/Challenge05Page"
import Login from "./Login"
import Register from "./Register"
import { AuthContext } from "./context/AuthContext"

function PrivateRoute({ children }: { children: ReactNode }) {
  const authContext = useContext(AuthContext)

  if (!authContext?.user) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

function PublicRoute({ children }: { children: ReactNode }) {
  const authContext = useContext(AuthContext)

  if (authContext?.user) {
    return <Navigate to="/dashboard" />
  }

  return <>{children}</>
}

function Dashboard() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  if (!authContext?.user) {
    return null
  }

  const handleLogout = async () => {
    await authContext.logout()
    navigate("/login")
  }

  return (
    <main className="dashboard-page container py-5">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-lg auth-card">
            <div className="card-body p-4 p-lg-5">
              <span className="badge text-bg-primary mb-3">Dashboard</span>
              <h1 className="display-5 fw-bold mb-2">Hola, {authContext.user.email}</h1>
              <p className="text-secondary mb-4">
                Aquí tienes tus rutas privadas y tu app de tareas con Firebase.
              </p>

              <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                  <button className="btn btn-dark w-100 py-3" onClick={() => navigate("/challenge04")}>
                    Ir a Challenge 04
                  </button>
                </div>
                <div className="col-12 col-md-6">
                  <button className="btn btn-primary w-100 py-3" onClick={() => navigate("/challenge05")}>
                    Ir a Challenge 05
                  </button>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
                <Link to="/challenge05" className="text-decoration-none">
                  Abrir tarea privada
                </Link>
                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Challenge04Wrapper() {
  const navigate = useNavigate()
  return <Challenge04Page goBack={() => navigate("/dashboard")} />
}

function Challenge05Wrapper() {
  const navigate = useNavigate()
  return <Challenge05Page goBack={() => navigate("/dashboard")} />
}

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/challenge04"
        element={
          <PrivateRoute>
            <Challenge04Wrapper />
          </PrivateRoute>
        }
      />

      <Route
        path="/challenge05"
        element={
          <PrivateRoute>
            <Challenge05Wrapper />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App
