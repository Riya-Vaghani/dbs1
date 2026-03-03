import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Velora Cinemas</h1>
      <p>A refined cinematic experience.</p>

      <button onClick={() => navigate("/movies")}>
        Enter The Theatre
      </button>

      <button onClick={() => navigate("/admin")}>
        Admin Panel
      </button>
    </div>
  );
}

export default Home;
