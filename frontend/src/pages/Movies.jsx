import { useNavigate } from "react-router-dom";

function Movies() {
  const navigate = useNavigate();

  const dummyMovies = [
    { id: 1, title: "The Silent Throne" },
    { id: 2, title: "Midnight Prophecy" },
    { id: 3, title: "Echoes of Eternity" }
  ];

  return (
    <div className="container">
      <h1>Now Showing</h1>

      {dummyMovies.map((movie) => (
        <div className="card" key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => navigate("/shows")}>
            View Shows
          </button>
        </div>
      ))}
    </div>
  );
}

export default Movies;
