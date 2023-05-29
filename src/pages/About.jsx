import ReactSvg from "../assets/react-logo.svg";
import SanitySvg from "../assets/sanity-logo.svg";
import Auth0Svg from "../assets/auth0-logo.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>Om</h1>
      <p>
        Vestibulum nec vehicula mi, eu fermentum turpis. Nullam placerat quam
        aliquam, sodales neque vel, lobortis mi. Vivamus vitae accumsan nisl.
        Nunc eu dui at velit porttitor eleifend. Etiam lorem nisl, rutrum et leo
        at, ornare accumsan mi. Praesent quam orci, aliquam et finibus et,
        lacinia vitae turpis. Aenean sed mauris non sapien iaculis dignissim vel
        at leo. Integer nunc metus, feugiat a quam sed, dapibus tristique mi.
        Fusce feugiat nulla at faucibus consequat.
      </p>
      <h2>Denne nettsiden er bygget med:</h2>
      <section className="toolsUsed">
        <section>
          <Link to="https://react.dev/" target="_blank">
            <article>
              <h3>React.js</h3>
              <img src={ReactSvg} />
            </article>
          </Link>
          <p>
            Praesent quam orci, aliquam et finibus et, lacinia vitae turpis.
            Aenean sed mauris non sapien iaculis dignissim vel at leo. Integer
            nunc metus, feugiat a quam sed, dapibus tristique mi. Fusce feugiat
            nulla at faucibus consequat.
          </p>
        </section>
        <section>
          {" "}
          <Link to="https://www.sanity.io/" target="_blank">
            <article>
              <h3>Sanity.io</h3>
              <img src={SanitySvg} />
            </article>
          </Link>
          <p>
            Praesent quam orci, aliquam et finibus et, lacinia vitae turpis.
            Aenean sed mauris non sapien iaculis dignissim vel at leo. Integer
            nunc metus, feugiat a quam sed, dapibus tristique mi. Fusce feugiat
            nulla at faucibus consequat.
          </p>
        </section>
        <section>
          <Link to="https://auth0.com/" target="_blank">
            <article>
              <h3>Auth0</h3>
              <img src={Auth0Svg} />
            </article>
          </Link>
          <p>
            Praesent quam orci, aliquam et finibus et, lacinia vitae turpis.
            Aenean sed mauris non sapien iaculis dignissim vel at leo. Integer
            nunc metus, feugiat a quam sed, dapibus tristique mi. Fusce feugiat
            nulla at faucibus consequat.
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
