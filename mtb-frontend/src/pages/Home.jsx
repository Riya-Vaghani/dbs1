import { useEffect, useState } from "react";
import API from "../api/axios";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await API.get("/movies");
      setMovies(response.data.movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Now Showing 🎬</h1>

      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.movie_id}
            className="bg-white shadow-lg rounded-xl p-4"
          >
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-gray-600">{movie.genre_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
