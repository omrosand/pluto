import "./App.scss";
import { Route, Routes, NavLink } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

function App() {
  return (
    <section className="pageWrapper">
      <h1 className="header">
        <NavLink to="/">Pluto</NavLink>
      </h1>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om" element={<About />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
