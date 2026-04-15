import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Explorer from "./Explorer"
import PrivateRoute from "./PrivateRoute"

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/explorer"
        element={
          <PrivateRoute>
            <Explorer />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRouter