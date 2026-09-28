import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext.jsx";
import { ThemeContext } from "./ThemeContext.jsx";

export default function Menu({ buttonStyle }) {
  const { cart } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  function linkStyle({ isActive }) {
    return {
      color: isActive ? "#ff8c00" : theme === "dark" ? "#fff" : "#000",
      fontWeight: isActive ? "bold" : "normal",
      marginRight: "16px",
    };
  }

  return (
    <nav style={{ marginBottom: "24px" }}>
      <NavLink to="/" end style={linkStyle}>Каталог</NavLink>
      <NavLink to="/cart" style={linkStyle}>Корзина ({cart.length})</NavLink>
      <NavLink to="/login" style={linkStyle}>Вход</NavLink>
      <NavLink to="/dashboard" style={linkStyle}>Личный кабинет</NavLink>
      <button type="button" style={buttonStyle} onClick={toggleTheme}>
        Переключить тему ({theme})
      </button>
    </nav>
  );
}
