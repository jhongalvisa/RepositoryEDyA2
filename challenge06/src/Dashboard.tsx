import { useContext } from "react";
import { AuthContext } from "./AuthContext";

type DashboardProps = {
  goToChallenge04: () => void;
  goToChallenge05: () => void;
  goToLogin: () => void;
};

function Dashboard({
  goToChallenge04,
  goToChallenge05,
  goToLogin,
}: DashboardProps) {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    goToLogin();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <p>Usuario actual: {user?.email}</p>

      <button onClick={goToChallenge04}>Ir a Challenge 04</button>

      <br />
      <br />

      <button onClick={goToChallenge05}>Ir a Challenge 05</button>

      <br />
      <br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;