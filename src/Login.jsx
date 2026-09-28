import { useNavigate } from "react-router-dom";

export default function Login({ buttonStyle, onLogin }) {
  const navigate = useNavigate();

  function handleLogin() {
    onLogin(true);
    navigate("/dashboard");
  }

  return (
    <section>
      <h1>Вход</h1>
      <button type="button" style={buttonStyle} onClick={handleLogin}>Войти</button>
    </section>
  );
}
