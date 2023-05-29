const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <section className="userFormWrapper">
      <h2>Logg inn:</h2>
      <form onSubmit={handleLogin} className="userForm">
        <label htmlFor="username">Brukernavn:</label>
        <input type="text" name="username" />
        <label htmlFor="password">Passord:</label>
        <input type="text" name="password" />
        <button type="submit">Logg inn!</button>
      </form>
    </section>
  );
};

export default Login;
