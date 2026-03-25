import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

type LoginProps = {
  onLoginSuccess: () => void;
};

function Login({ onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (email === "user@mail.com" && password === "123") {
      login({
        name: "User",
        email,
      });

      setError("");
      onLoginSuccess();
      return;
    }

    setError("Correo o contraseña incorrectos");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}

export default Login;