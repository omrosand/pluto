import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const NotLoggedIn = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleModal = (action) => {
    if (action === "Logg inn") {
      setModalContent(<Login />);
    }
    if (action === "Registrer") {
      setModalContent(<Register />);
    }
  };
  return (
    <>
      <h1>Heisann!</h1>
      <p className="loginPrompt">
        Du må logge inn eller registrere en bruker for å bruke pluto.
      </p>
      <section className="notLoggedInOptions">
        <button onClick={() => handleModal("Logg inn")}>Logg inn</button>
        <button onClick={() => handleModal("Registrer")}>Registrer</button>
      </section>
      {modalContent}
    </>
  );
};

export default NotLoggedIn;
