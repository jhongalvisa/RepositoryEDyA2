import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth se tiene que usar adentro de AuthProvider");
    }

    return context;
}

export default useAuth