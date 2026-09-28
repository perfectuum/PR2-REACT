import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./ThemeContext.jsx";
import Menu from "./Menu.jsx";
import Catalog from "./Catalog.jsx";
import Cart from "./Cart.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isDark = theme === "dark";

  const appStyle = {
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  const buttonStyle = {
    backgroundColor: isDark ? "#222" : "#eee",
    color: isDark ? "#fff" : "#000",
    border: "none",
    outline: "none",
  };

  return (
    <BrowserRouter>
      <main style={appStyle}>
        <Menu buttonStyle={buttonStyle} />
        <Routes>
          <Route path="/" element={<Catalog buttonStyle={buttonStyle} />} />
          <Route path="/cart" element={<Cart buttonStyle={buttonStyle} />} />
          <Route path="/login" element={<Login buttonStyle={buttonStyle} onLogin={setIsLoggedIn} />} />
          <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
