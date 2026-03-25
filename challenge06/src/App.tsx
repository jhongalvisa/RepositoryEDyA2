import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Challenge04Page from "./challenge04/Challenge04Page";
import Challenge05Page from "./challenge05/Challenge05Page";

type PagePath = "/login" | "/dashboard" | "/challenge04" | "/challenge05";

function normalizePath(path: string): PagePath {
  if (path === "/dashboard") return "/dashboard";
  if (path === "/challenge04") return "/challenge04";
  if (path === "/challenge05") return "/challenge05";
  return "/login";
}

function App() {
  const { user } = useContext(AuthContext);
  const [currentPath, setCurrentPath] = useState<PagePath>(
    normalizePath(window.location.pathname)
  );

  const navigateTo = (path: PagePath, replace = false) => {
    if (replace) {
      window.history.replaceState({}, "", path);
    } else {
      window.history.pushState({}, "", path);
    }

    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!user && window.location.pathname !== "/login") {
      window.history.replaceState({}, "", "/login");
    }
  }, [user]);

  if (!user) {
    return <Login onLoginSuccess={() => navigateTo("/dashboard")} />;
  }

  if (currentPath === "/challenge04") {
    return <Challenge04Page goBack={() => navigateTo("/dashboard")} />;
  }

  if (currentPath === "/challenge05") {
    return <Challenge05Page goBack={() => navigateTo("/dashboard")} />;
  }

  return (
    <Dashboard
      goToChallenge04={() => navigateTo("/challenge04")}
      goToChallenge05={() => navigateTo("/challenge05")}
      goToLogin={() => navigateTo("/login", true)}
    />
  );
}

export default App;