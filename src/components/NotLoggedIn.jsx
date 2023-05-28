const NotLoggedIn = () => {
  return (
    <>
      <h1>Heisann!</h1>
      <p>Du må logge inn eller registrere en bruker for å bruke pluto.</p>
      <section className="notLoggedInOptions">
        <button>Logg inn</button>
        <button>Registrer</button>
      </section>
    </>
  );
};

export default NotLoggedIn;
