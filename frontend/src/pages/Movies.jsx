import { useEffect, useState } from "react";
import API from "../api/axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    API.get("/movies")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);

        // Fallback demo data
        setMovies([
          { id: 1, title: "The Emerald Throne" },
          { id: 2, title: "Silver Shadows" },
        ]);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Backend offline. Showing demo data.</p>;

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((m) => (
        <div key={m.id}>{m.title}</div>
      ))}
    </div>
  );
}

export default Movies;
