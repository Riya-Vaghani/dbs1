import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Shows from "./pages/Shows";
import Seats from "./pages/Seats";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Online Movie Booking</h2>
        <div>
          <a href="/">Home</a>
          <a href="/admin">Admin</a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/seats" element={<Seats />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
