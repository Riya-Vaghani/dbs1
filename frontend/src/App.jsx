import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import Seats from "./pages/Seats";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <header className="navbar">
        <h1 className="logo">Velora Cinemas</h1>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/shows">Shows</NavLink>
          <NavLink to="/seats">Seats</NavLink>
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <footer>
        © 2026 Velora Cinemas | Database Systems Project
      </footer>
    </div>
  );
}

export default App;
