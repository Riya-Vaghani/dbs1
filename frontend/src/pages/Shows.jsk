import { useNavigate } from "react-router-dom";

function Shows() {
  const navigate = useNavigate();

  const dummyShows = ["6:00 PM", "8:30 PM", "11:00 PM"];

  return (
    <div className="container">
      <h1>Select Show Time</h1>

      {dummyShows.map((time, index) => (
        <div className="card" key={index}>
          <h3>{time}</h3>
          <button onClick={() => navigate("/seats")}>
            Select Seats
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shows;
