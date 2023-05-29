import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Hjem
      </NavLink>
      <NavLink
        to="/feed"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Feed
      </NavLink>
      <NavLink
        to="/om"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Om prosjektet
      </NavLink>

      <NavLink
        to="/profil"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Profil
      </NavLink>
    </nav>
  );
};

export default Navigation;
