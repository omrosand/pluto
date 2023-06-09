import omrlogo from "../assets/omr-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="footerContent">
        <img src={omrlogo} alt="Rosand logo" />
        <section>
          <h4>Kontakt:</h4>
          <p>rosandolemartin@gmail.com</p>
        </section>
        <section>
          <h4>Lenker:</h4>
          <Link to="https://github.com/omrosand" target="_blank">
            GitHub
          </Link>
          <p>LinkedIn</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
