import { useEffect, useState } from "react";
import API from "../api/axios";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.get("/movies")
      .then((res) => setMovies(res.data))
      .catch(() =>
        setMovies([
          { id: 1, title: "The Emerald Throne" },
          { id: 2, title: "Silver Shadows" },
        ])
      );
  }, []);

  return (
    <div className="page">
      <h2>Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          {movie.title}
        </div>
      ))}
    </div>
  );
}

export default Movies;
