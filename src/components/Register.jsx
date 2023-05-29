const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <section className="userFormWrapper">
      <h2>Registrer ny bruker:</h2>
      <form onSubmit={handleRegister} className="userForm">
        <label htmlFor="username">Brukernavn:</label>
        <input type="text" name="username" />
        <label htmlFor="password">Passord:</label>
        <input type="text" name="password" />
        <button type="submit">Registrer!</button>
      </form>
    </section>
  );
};

export default Register;
