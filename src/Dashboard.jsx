export default function Dashboard({ isLoggedIn }) {
  return (
    <section>
      <h1>Личный кабинет</h1>
      {isLoggedIn ? <p>Вы вошли</p> : <p>Сначала войдите через страницу «Вход».</p>}
    </section>
  );
}
