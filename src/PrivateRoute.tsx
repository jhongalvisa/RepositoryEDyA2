import type { ReactNode } from "react";
import { Navigate } from "react-router-dom"
import useAuth from "./useAuth";

interface PrivateRoteProps {
    children: ReactNode;
}

function PrivateRoute({ children }: PrivateRoteProps) {
    const { user, loading } = useAuth();

    if (loading) {
        return <p>Cargando sesión...</p>
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}

export default PrivateRoute;